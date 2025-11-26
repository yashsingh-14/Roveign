"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-24 container-width">
                <div className="max-w-3xl mx-auto prose dark:prose-invert">
                    <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>

                    <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground">
                            Welcome to Roveign. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
                        <p className="text-muted-foreground mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Identity Data includes first name, last name, username or similar identifier.</li>
                            <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                            <li>Financial Data includes bank account and payment card details.</li>
                            <li>Transaction Data includes details about payments to and from you and other details of products you have purchased from us.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                        <p className="text-muted-foreground">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}
