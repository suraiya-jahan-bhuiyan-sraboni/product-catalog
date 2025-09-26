/* 
this is a product details page
it is a dynamic route page
it will show the details of a product when user clicks on the details button on the product card
*/

"use client"
import { Button } from "@/components/ui/button";
import { Products } from "@/data/products";
import { useRouter } from "next/navigation";

import { use } from "react";
import { toast } from "sonner";

type props = {
    params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: props) {
    const router = useRouter();

    const { id } = use(params);
    // console.log(id)
    const product = Products.find((p) => p.id === id);

    if (!product) {
        return <div className="py-25 text-center">Product not found</div>;
    }
    return <div className="py-25 min-h-screen w-11/12 mx-auto">

        <div className="max-w-3xl mx-auto">
            {/* go back button */}
            <Button
                variant="outline"
                className="mb-6"
                onClick={() => router.back()}
            >
                ← Go Back
            </Button>
            {/* product details */}
            <h1 className="text-2xl font-bold">{product.title}</h1>
            
            <img
                src={product.image}
                alt={product.title}
                className="mt-4 h-72 w-full object-cover rounded"
            />

            <p className="mt-4 text-gray-700">{product.description}</p>

            <div className="mt-6 flex items-center justify-between">
                <div className="text-xl font-semibold">${product.price.toFixed(2)}</div>
                <Button onClick={() => toast.success(`You bought: ${product.title}`)}>Buy now</Button>
            </div>

        </div>
    </div>;
}