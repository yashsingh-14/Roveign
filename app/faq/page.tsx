"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-12 container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h1>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is your return policy?</AccordionTrigger>
                            <AccordionContent>
                                We offer a 30-day return policy for all unworn items in their original condition with tags attached.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                            <AccordionContent>
                                Standard shipping takes 3-5 business days. Express shipping options are available at checkout.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we ship to most countries worldwide. International shipping times vary by location.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How can I track my order?</AccordionTrigger>
                            <AccordionContent>
                                Once your order ships, you will receive a confirmation email with a tracking number.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Are your products sustainable?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we are committed to sustainability. We use ethically sourced materials and eco-friendly packaging.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>
            </div>

            <Footer />
        </main>
    )
}
