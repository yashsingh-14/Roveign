"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCartStore } from "@/lib/store/cart-store"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/utils"

export default function CartSheet() {
    const { items, removeItem, updateQuantity, total } = useCartStore()
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)

    const handleCheckout = () => {
        document.getElementById('close-cart')?.click()
        window.location.href = '/checkout'
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-transparent">
                    <ShoppingBag className="h-5 w-5" />
                    {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col glass-panel border-l border-white/10">
                <SheetHeader>
                    <SheetTitle className="text-xl font-heading">Shopping Cart ({itemCount})</SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        <ShoppingBag className="h-16 w-16 text-muted-foreground/20" />
                        <p className="text-muted-foreground text-lg">Your cart is empty</p>
                        <Button variant="outline" className="mt-4" onClick={() => document.getElementById('close-cart')?.click()}>Start Shopping</Button>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 -mx-6 px-6 my-4">
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex space-x-4">
                                        <div className="relative h-24 w-20 rounded-md overflow-hidden bg-secondary">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex justify-between">
                                                <h3 className="font-medium">{item.name}</h3>
                                                <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {item.color} / {item.size}
                                            </p>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center space-x-2 border rounded-md p-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="space-y-4 pt-4">
                            <Separator />
                            <div className="flex justify-between text-lg font-medium">
                                <span>Total</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                            <Button className="w-full h-12 text-lg" size="lg" onClick={handleCheckout}>
                                Checkout
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    )
}
