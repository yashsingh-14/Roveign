"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 max-w-5xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-[0.2em] text-white/90 uppercase backdrop-blur-sm">
                            Spring / Summer 2025
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.9]">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="block"
                            >
                                TIMELESS
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-white/50 italic font-serif">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="block"
                            >
                                AESTHETIC
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed"
                    >
                        Where luxury meets minimalism. Curated for the modern individual who values quality above all else.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 min-w-[180px] h-14 text-base rounded-full transition-transform hover:scale-105" asChild>
                            <Link href="/shop">Shop Now</Link>
                        </Button>
                        <Button size="lg" variant="link" className="text-white hover:text-white/70 text-base underline-offset-4" asChild>
                            <Link href="/categories">View Collections</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    )
}
