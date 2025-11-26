"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ProductCard from "@/components/feature/ProductCard"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

import { PRODUCTS } from "@/lib/products"

export default function ShopPage() {
    const [priceRange, setPriceRange] = useState([0, 1000])

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-16 container-width">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 space-y-8">
                        <div>
                            <h3 className="font-heading font-bold text-xl mb-4">Filters</h3>
                            <Accordion type="single" collapsible defaultValue="category" className="w-full">
                                <AccordionItem value="category">
                                    <AccordionTrigger>Category</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-2">
                                            {["Outerwear", "Knitwear", "Bottoms", "Dresses", "Footwear"].map((category) => (
                                                <div key={category} className="flex items-center space-x-2">
                                                    <Checkbox id={category} />
                                                    <Label htmlFor={category}>{category}</Label>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="price">
                                    <AccordionTrigger>Price Range</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="px-2 py-4">
                                            <Slider
                                                defaultValue={[0, 1000]}
                                                max={1000}
                                                step={10}
                                                value={priceRange}
                                                onValueChange={setPriceRange}
                                                className="mb-4"
                                            />
                                            <div className="flex justify-between text-sm text-muted-foreground">
                                                <span>${priceRange[0]}</span>
                                                <span>${priceRange[1]}</span>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="size">
                                    <AccordionTrigger>Size</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-3 gap-2">
                                            {["XS", "S", "M", "L", "XL"].map((size) => (
                                                <Button key={size} variant="outline" size="sm" className="w-full">
                                                    {size}
                                                </Button>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-muted-foreground">{PRODUCTS.length} Products</p>
                            <div className="flex items-center gap-2">
                                <Label>Sort by:</Label>
                                <select className="bg-background border border-input rounded-md px-2 py-1 text-sm">
                                    <option>Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PRODUCTS.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
