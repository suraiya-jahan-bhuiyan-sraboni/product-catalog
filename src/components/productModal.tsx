import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { toast } from "sonner";

type BuyModalProps = {
    product: Product ;
    open: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, open, onClose }: BuyModalProps) {
     if (!product) return null;
    return <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle>{product.title}</DialogTitle>
                <DialogDescription>
                    {product.description}
                    <br />
                    <span className="mt-2 font-semibold">${product.price.toFixed(2)}</span>
                </DialogDescription>
            </DialogHeader>

            <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover my-4 rounded"
            />

            <div className="flex justify-end gap-2 mt-4">
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                    onClick={() => {
                        toast.success(`You bought: ${product.title}`);
                        onClose();
                    }}
                >
                    Confirm Buy
                </Button>
            </div>
        </DialogContent>
    </Dialog>
}