"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet" // Need to create Sheet component
import { ShoppingBag, X, Plus, Minus } from "lucide-react"
import { useState } from "react"

// Placeholder Sheet component since I can't run shadcn add sheet
// I will create a simple implementation of Sheet here or just use a fixed div for now if Sheet is complex.
// Actually, I'll create components/ui/sheet.tsx first.

export default function CartDrawer() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                    2
                </span>
            </Button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="fixed inset-y-0 right-0 w-full max-w-md bg-background border-l border-border shadow-2xl z-50 p-6 flex flex-col transition-transform duration-300 transform translate-x-0">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">Your Cart</h2>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-6">
                            {/* Cart Items */}
                            {[1, 2].map((item) => (
                                <div key={item} className="flex gap-4">
                                    <div className="w-24 h-24 rounded-md overflow-hidden border border-border">
                                        <img
                                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop"
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold">Premium Cotton Tee</h3>
                                        <p className="text-sm text-muted-foreground">Black / M</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center border border-border rounded-md">
                                                <button className="p-1 hover:bg-accent"><Minus className="h-4 w-4" /></button>
                                                <span className="px-2 text-sm">1</span>
                                                <button className="p-1 hover:bg-accent"><Plus className="h-4 w-4" /></button>
                                            </div>
                                            <p className="font-bold">$45.00</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-border pt-6 mt-6 space-y-4">
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>$90.00</span>
                            </div>
                            <Button className="w-full h-12 text-lg">Checkout</Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
