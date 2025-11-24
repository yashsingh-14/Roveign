"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

interface ProductProps {
    id: string
    name: string
    price: number
    image: string
    category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="overflow-hidden border-none shadow-lg glass group">
                <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <Button
                        size="icon"
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0"
                    >
                        <ShoppingBag className="h-5 w-5" />
                    </Button>
                </div>
                <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{category}</p>
                    <Link href={`/product/${id}`} className="block">
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-1">{name}</h3>
                    </Link>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="font-bold text-lg">${price.toFixed(2)}</span>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
