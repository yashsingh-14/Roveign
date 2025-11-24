"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { toast } from "sonner"

interface Product {
    id: string
    name: string
    price: number
    image: string
    category: string
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem)

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            color: "Default",
            size: "M"
        })
        toast.success("Added to cart")
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <Link href={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-sm">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Quick Add Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <Button
                            className="w-full bg-white text-black hover:bg-white/90 shadow-lg"
                            onClick={handleAddToCart}
                        >
                            Quick Add
                        </Button>
                    </div>
                </div>
                <div className="mt-4 space-y-1">
                    <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
                </div>
            </Link>
        </motion.div>
    )
}
