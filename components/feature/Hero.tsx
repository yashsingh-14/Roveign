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
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden">
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 max-w-4xl"
                >
                    <h2 className="text-sm md:text-base font-medium tracking-[0.2em] text-white/80 uppercase">
                        New Collection 2024
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight">
                        ELEGANCE <br /> REDEFINED
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover the essence of modern luxury. Meticulously crafted pieces that define the new standard of fashion.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 min-w-[160px] h-12 text-base" asChild>
                            <Link href="/shop">Shop Collection</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 min-w-[160px] h-12 text-base" asChild>
                            <Link href="/about">Explore Brand</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent mx-auto" />
            </motion.div>
        </section>
    )
}
