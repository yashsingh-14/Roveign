"use client"

import ProductCard from "./ProductCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const PRODUCTS = [
    {
        id: "1",
        name: "Oversized Wool Coat",
        category: "Outerwear",
        price: 299,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: "2",
        name: "Pleated Wide Leg Trousers",
        category: "Bottoms",
        price: 159,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop"
    },
    {
        id: "3",
        name: "Cashmere Turtleneck",
        category: "Knitwear",
        price: 189,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2564&auto=format&fit=crop"
    },
    {
        id: "4",
        name: "Leather Chelsea Boots",
        category: "Footwear",
        price: 249,
        image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=2574&auto=format&fit=crop"
    }
]

export default function FeaturedProducts() {
    return (
        <section className="py-24 bg-background">
            <div className="container-width">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Collection</h2>
                        <p className="text-muted-foreground max-w-md">
                            Curated pieces from our latest season. Timeless designs meets contemporary aesthetics.
                        </p>
                    </div>
                    <Button variant="link" className="hidden md:flex text-lg" asChild>
                        <Link href="/shop">View All Products &rarr;</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/shop">View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
