"use client"

import ProductCard from "./ProductCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { PRODUCTS } from "@/lib/products"

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
                    {PRODUCTS.slice(0, 52).map((product) => (
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
