"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { motion } from "framer-motion"

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-heading font-bold mb-4"
                >
                    Order Placed Successfully!
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground max-w-md mb-8"
                >
                    Thank you for your purchase. We have received your order and will send you a confirmation email shortly.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4"
                >
                    <Button asChild size="lg">
                        <Link href="/shop">Continue Shopping</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/">Return Home</Link>
                    </Button>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}
