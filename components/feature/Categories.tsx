"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const CATEGORIES = [
    {
        id: "women",
        name: "Women",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
        href: "/shop?category=women"
    },
    {
        id: "men",
        name: "Men",
        image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2671&auto=format&fit=crop",
        href: "/shop?category=men"
    },
    {
        id: "accessories",
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2665&auto=format&fit=crop",
        href: "/shop?category=accessories"
    }
]

export default function Categories() {
    return (
        <section className="py-24 bg-secondary/30">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
                    {CATEGORIES.map((category, index) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="relative group overflow-hidden h-full w-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full w-full"
                            >
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-4xl font-heading font-bold text-white tracking-wide uppercase">
                                        {category.name}
                                    </h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
