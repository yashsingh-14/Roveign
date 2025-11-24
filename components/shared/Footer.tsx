 export default function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-gradient mb-4">Roveign</h3>
                        <p className="text-muted-foreground max-w-xs">
                            Redefining luxury fashion for the modern era. Quality, style, and sustainability in every stitch.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Men</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Women</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessories</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Roveign. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
