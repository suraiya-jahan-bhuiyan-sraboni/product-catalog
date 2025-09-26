"use client"
import Pagination from "@/components/pagination";
import ProductCard from "@/components/productCard";
import ProductModal from "@/components/productModal";
import FilterSearchBar from "@/components/searchAndFilter";
import { Product, Products } from "@/data/products";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by category and search
  const categories = Array.from(new Set(Products.map(p => p.category).filter((c): c is string => !!c)));
  const filteredProducts = Products.filter((p) => {
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  // handle buy and open modal
  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  }
  return (
    <div className="font-sans min-h-screen w-11/12 mx-auto py-25">
      {/* search and filter */}
      <FilterSearchBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage(1);
        }}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* all products */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={handleBuy} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          {selectedCategory
            ? `Product is not found for your search "${searchTerm}" in "${selectedCategory}" category`
            : searchTerm
              ? `No products found for your search "${searchTerm}"`
              : "No products found"}
        </div>
      )}
      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      {/* modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

    </div>
  );
}
