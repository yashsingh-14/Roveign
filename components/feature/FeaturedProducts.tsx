import ProductCard from "./ProductCard"

// Mock data for now, will fetch from API later
const FEATURED_PRODUCTS = [
    {
        id: "1",
        name: "Premium Cotton Tee",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
        category: "Men"
    },
    {
        id: "2",
        name: "Silk Blouse",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1974&auto=format&fit=crop",
        category: "Women"
    },
    {
        id: "3",
        name: "Leather Wallet",
        price: 85.00,
        image: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?q=80&w=1887&auto=format&fit=crop",
        category: "Accessories"
    },
    {
        id: "4",
        name: "Denim Jacket",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070&auto=format&fit=crop",
        category: "Men"
    }
]

export default function FeaturedProducts() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Trending Now</h2>
                <p className="text-muted-foreground">Curated picks for the season.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {FEATURED_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    )
}
