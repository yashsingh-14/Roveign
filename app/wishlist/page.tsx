"use client";
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { useWishlistStore } from "@/lib/store/wishlist-store"
import ProductCard from "@/components/feature/ProductCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function WishlistPage() {
    const { items } = useWishlistStore()

    return (
        <main className="min-h-screen bg-background pt-20">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center gap-4 mb-8">
                    <Heart className="h-8 w-8 text-red-500 fill-current" />
                    <h1 className="text-3xl font-heading font-bold">My Wishlist</h1>
                </div>

                {items.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg mb-6">Your wishlist is empty.</p>
                        <Button asChild size="lg">
                            <Link href="/shop">Explore Products</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {items.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </main>
    )
}
