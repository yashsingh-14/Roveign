"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function ShippingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-24 container-width">
                <div className="max-w-3xl mx-auto prose dark:prose-invert">
                    <h1 className="text-4xl font-heading font-bold mb-8">Shipping & Returns</h1>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Shipping Policy</h2>
                        <div className="space-y-6 text-muted-foreground">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">Domestic Shipping</h3>
                                <p>We offer free standard shipping on all domestic orders over $150. Standard shipping typically takes 3-5 business days.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">International Shipping</h3>
                                <p>We ship to most countries worldwide. International shipping rates are calculated at checkout based on destination and weight. Delivery times vary by location, typically 7-14 business days.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">Order Processing</h3>
                                <p>Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
                        <div className="space-y-6 text-muted-foreground">
                            <p>
                                We want you to be completely satisfied with your purchase. If you are not happy with your order, we will accept returns of unworn, unwashed, and unaltered items with original tags attached within 30 days of delivery.
                            </p>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">How to Return</h3>
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li>Visit our Returns Portal to initiate your return.</li>
                                    <li>Print your prepaid shipping label.</li>
                                    <li>Pack your items securely and attach the shipping label.</li>
                                    <li>Drop off your package at any authorized carrier location.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">Refunds</h3>
                                <p>Once we receive your return, please allow 3-5 business days for processing. Refunds will be issued to the original payment method.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}
