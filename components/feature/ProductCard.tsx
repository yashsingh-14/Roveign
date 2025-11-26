"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useCartStore } from "@/lib/store/cart-store"
import { useWishlistStore } from "@/lib/store/wishlist-store"
import { toast } from "sonner"
import { formatPrice } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProductCardProps {
    product: {
        id: string
        name: string
        price: number
        image: string
        category: string
    }
}

export default function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem)
    const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
    const isWishlisted = isInWishlist(product.id)

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            size: "M", // Default size
            color: "Default"
        })
        toast.success("Added to cart")
    }

    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault()
        if (isWishlisted) {
            removeFromWishlist(product.id)
            toast.info("Removed from wishlist")
        } else {
            addToWishlist(product)
            toast.success("Added to wishlist")
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative"
        >
            <Link href={`/shop/${product.id}`}>
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={700}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex gap-2">
                        <Button
                            className="w-full gap-2 bg-white/90 text-black hover:bg-white dark:bg-black/90 dark:text-white dark:hover:bg-black backdrop-blur-sm"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart className="h-4 w-4" />
                            Add to Cart
                        </Button>
                        <Button
                            size="icon"
                            variant="secondary"
                            className={`bg-white/90 hover:bg-white dark:bg-black/90 dark:hover:bg-black backdrop-blur-sm ${isWishlisted ? 'text-red-500' : ''}`}
                            onClick={handleWishlist}
                        >
                            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                        </Button>
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{formatPrice(Number(product.price))}</p>
                </div>
            </Link>
        </motion.div>
    )
}
