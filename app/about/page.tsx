"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import Image from "next/image"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
                        alt="About Roveign"
                        fill
                        className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
                </div>

                <div className="relative z-10 container-width text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6"
                    >
                        Redefining Fashion
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Roveign is more than just a brand. It's a movement towards sustainable, premium, and accessible luxury.
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="container-width">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Mission</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                At Roveign, we believe that style shouldn't come at the cost of the planet. Our mission is to create timeless pieces that you'll cherish for years to come, using ethically sourced materials and sustainable production methods.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We bridge the gap between high-end luxury and everyday wearability, offering you a curated collection that elevates your wardrobe without compromise.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=2670&auto=format&fit=crop"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
