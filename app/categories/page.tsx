"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import Categories from "@/components/feature/Categories"
import { motion } from "framer-motion"

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-12 container-width text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-heading font-bold mb-4"
                >
                    Our Collections
                </motion.h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Explore our carefully curated categories designed to fit every aspect of your lifestyle.
                </p>
            </div>

            <Categories />

            <Footer />
        </main>
    )
}
