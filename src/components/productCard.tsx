"use client"
import Link from "next/link";
import { Product } from "../data/products";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
type ProductCardProps = {
    product: Product;
    onBuy: (product: Product) => void;
}
export default function ProductCard({ product, onBuy }: ProductCardProps) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader>
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 w-full object-cover rounded-md"
                />
            </CardHeader>

            <CardContent className="flex-1">
                <h3 className="text-base font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{product.description}</p>
            </CardContent>

            <CardFooter className="flex items-center justify-between gap-2">
                <div className="font-medium">${product.price.toFixed(2)}</div>
                <div className="flex gap-2">
                    <Button size="sm" onClick={() => onBuy(product)}
                    >
                        Buy now
                    </Button>
                    <Link href={`/products/${product.id}`}>
                        <Button variant="outline" size="sm">
                            Details
                        </Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}