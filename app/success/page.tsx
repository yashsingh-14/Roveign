"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useCartStore } from "@/lib/store/cart-store"
import confetti from "canvas-confetti"

export default function SuccessPage() {
    const clearCart = useCartStore((state) => state.clearCart)

    useEffect(() => {
        clearCart()
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        const random = (min: number, max: number) => Math.random() * (max - min) + min

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            confetti({
                ...defaults, particleCount,
                origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 }
            })
            confetti({
                ...defaults, particleCount,
                origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 }
            })
        }, 250)
    }, [clearCart])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
            <div className="flex flex-col items-center space-y-6 text-center max-w-md">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
                    <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-500" />
                </div>
                <h1 className="text-3xl font-heading font-bold">Payment Successful!</h1>
                <p className="text-muted-foreground">
                    Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                </p>
                <div className="flex flex-col w-full gap-3 pt-4">
                    <Button asChild size="lg" className="w-full">
                        <Link href="/shop">Continue Shopping</Link>
                    </Button>
                    <Button variant="outline" asChild size="lg" className="w-full">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
