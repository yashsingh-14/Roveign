"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { Star, Truck, ShieldCheck, RefreshCw } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

// Mock data for a single product
const PRODUCT = {
    id: "1",
    name: "Oversized Wool Coat",
    price: 299,
    description: "Crafted from premium Italian wool, this oversized coat features a relaxed silhouette with dropped shoulders and wide lapels. A timeless piece that combines comfort with effortless elegance.",
    images: [
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2520&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2626&auto=format&fit=crop"
    ],
    colors: ["Camel", "Black", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
        "100% Wool",
        "Lining: 100% Viscose",
        "Dry clean only",
        "Made in Italy"
    ]
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const [selectedColor, setSelectedColor] = useState(PRODUCT.colors[0])
    const [selectedSize, setSelectedSize] = useState(PRODUCT.sizes[2])
    const [mainImage, setMainImage] = useState(PRODUCT.images[0])
    const addItem = useCartStore((state) => state.addItem)

    const handleAddToCart = () => {
        addItem({
            id: PRODUCT.id,
            name: PRODUCT.name,
            price: PRODUCT.price,
            image: PRODUCT.images[0],
            quantity: 1,
            color: selectedColor,
            size: selectedSize
        })
        toast.success("Added to cart")
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-16 container-width">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
                            <Image
                                src={mainImage}
                                alt={PRODUCT.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {PRODUCT.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMainImage(image)}
                                    className={cn(
                                        "relative aspect-[3/4] overflow-hidden rounded-md bg-secondary transition-all",
                                        mainImage === image ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                                    )}
                                >
                                    <Image
                                        src={image}
                                        alt={`${PRODUCT.name} view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:sticky lg:top-32 h-fit space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-heading font-bold">{PRODUCT.name}</h1>
                            <div className="flex items-center space-x-4">
                                <p className="text-2xl font-medium">{formatPrice(PRODUCT.price)}</p>
                                <div className="flex items-center text-yellow-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-muted-foreground text-sm ml-2">(42 reviews)</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {PRODUCT.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Color Selector */}
                            <div className="space-y-3">
                                <span className="font-medium">Color: {selectedColor}</span>
                                <div className="flex space-x-3">
                                    {PRODUCT.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={cn(
                                                "h-10 w-10 rounded-full border-2 transition-all",
                                                selectedColor === color ? "border-primary p-1" : "border-transparent"
                                            )}
                                        >
                                            <div
                                                className="h-full w-full rounded-full border border-border"
                                                style={{ backgroundColor: color.toLowerCase() === 'camel' ? '#C19A6B' : color.toLowerCase() }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selector */}
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="font-medium">Size: {selectedSize}</span>
                                    <button className="text-sm underline text-muted-foreground hover:text-primary">
                                        Size Guide
                                    </button>
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {PRODUCT.sizes.map((size) => (
                                        <Button
                                            key={size}
                                            variant={selectedSize === size ? "default" : "outline"}
                                            onClick={() => setSelectedSize(size)}
                                            className="w-full"
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <Button size="lg" className="w-full h-14 text-lg" onClick={handleAddToCart}>
                                Add to Cart
                            </Button>

                            {/* Features */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <Truck className="h-6 w-6 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Free Shipping</span>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <RefreshCw className="h-6 w-6 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Free Returns</span>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <ShieldCheck className="h-6 w-6 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Secure Checkout</span>
                                </div>
                            </div>

                            {/* Details Accordion */}
                            <div className="pt-6">
                                <h3 className="font-medium mb-4">Product Details</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {PRODUCT.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
