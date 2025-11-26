'use client'

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 pt-16 pb-8">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
                            ROVEIGN
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Redefining luxury fashion for the modern era. Experience quality, style, and innovation in every stitch.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link href="/shop?sort=newest" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link href="/categories" className="hover:text-primary transition-colors">Collections</Link></li>
                            <li><Link href="/shop?category=accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for exclusive offers.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => {
                            e.preventDefault()
                            const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
                            fetch('/api/newsletter', {
                                method: 'POST',
                                body: JSON.stringify({ email })
                            }).then(res => {
                                if (res.ok) alert('Subscribed!')
                                else alert('Error subscribing')
                            })
                        }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} ROVEIGN. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-muted-foreground">
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
