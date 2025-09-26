"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FilterSearchBarProps {
    categories: string[];
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export default function FilterSearchBar({
    categories,
    selectedCategory,
    onCategoryChange,
    searchTerm,
    onSearchChange,
}: FilterSearchBarProps) {
    return (
        <div className="mb-6 flex flex-col items-center md:justify-between gap-4">

            {/* Search Input */}
            <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full md:max-w-md"
            />

            {/* Filter keywords */}
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    onClick={() => onCategoryChange(null)}
                >
                    All
                </Button>
                {categories.map((cate) => (
                    <Button
                        key={cate}
                        variant={selectedCategory === cate ? "default" : "outline"}
                        onClick={() => onCategoryChange(cate)}
                    >
                        {cate}
                    </Button>
                ))}
            </div>
        </div>
    );
}
