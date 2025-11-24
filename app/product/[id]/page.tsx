"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react"

// Mock data
const PRODUCT = {
    id: "1",
    name: "Premium Cotton Tee",
    price: 45.00,
    description: "Experience ultimate comfort with our Premium Cotton Tee. Crafted from 100% organic cotton, this t-shirt offers a soft, breathable feel that's perfect for everyday wear. The modern fit and durable stitching ensure it looks great wash after wash.",
    images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"]
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const [selectedSize, setSelectedSize] = useState("M")
    const [selectedColor, setSelectedColor] = useState("Black")
    const [mainImage, setMainImage] = useState(PRODUCT.images[0])

    return (
        <main className="min-h-screen bg-background pt-20">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <motion.div
                            layoutId={`product-image-${params.id}`}
                            className="aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-lg"
                        >
                            <img src={mainImage} alt={PRODUCT.name} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="grid grid-cols-3 gap-4">
                            {PRODUCT.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                                >
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-foreground mb-2">{PRODUCT.name}</h1>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">(128 reviews)</span>
                            </div>
                            <p className="text-3xl font-bold text-primary">${PRODUCT.price.toFixed(2)}</p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            {PRODUCT.description}
                        </p>

                        {/* Selectors */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium mb-3">Color</h3>
                                <div className="flex space-x-3">
                                    {PRODUCT.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}
                                            style={{ backgroundColor: color.toLowerCase() }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium mb-3">Size</h3>
                                <div className="flex flex-wrap gap-3">
                                    {PRODUCT.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-md border transition-colors ${selectedSize === size ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-accent border-input'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 pt-6 border-t border-border">
                            <Button size="lg" className="flex-1 text-lg h-14">
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                Add to Cart
                            </Button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                <Truck className="w-5 h-5" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                <ShieldCheck className="w-5 h-5" />
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
