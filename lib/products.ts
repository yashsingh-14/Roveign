export interface Product {
    id: string
    name: string
    category: string
    price: number
    image: string
}

const CATEGORIES = ["Outerwear", "Bottoms", "Knitwear", "Footwear", "Dresses", "Tops", "Accessories"]

const BASE_PRODUCTS = [
    { name: "Oversized Wool Coat", category: "Outerwear", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop" },
    { name: "Pleated Wide Leg Trousers", category: "Bottoms", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop" },
    { name: "Cashmere Turtleneck", category: "Knitwear", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2564&auto=format&fit=crop" },
    { name: "Leather Chelsea Boots", category: "Footwear", image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=2574&auto=format&fit=crop" },
    { name: "Silk Midi Dress", category: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop" },
    { name: "Structured Blazer", category: "Outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2536&auto=format&fit=crop" },
    { name: "Classic White Tee", category: "Tops", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" },
    { name: "Denim Jacket", category: "Outerwear", image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?q=80&w=2536&auto=format&fit=crop" },
    { name: "Leather Crossbody Bag", category: "Accessories", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2669&auto=format&fit=crop" },
    { name: "Chunky Knit Sweater", category: "Knitwear", image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2672&auto=format&fit=crop" },
    { name: "High-Waisted Jeans", category: "Bottoms", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2573&auto=format&fit=crop" },
    { name: "Suede Ankle Boots", category: "Footwear", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2564&auto=format&fit=crop" },
    { name: "Linen Shirt", category: "Tops", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2576&auto=format&fit=crop" },
    { name: "Gold Hoop Earrings", category: "Accessories", image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=2662&auto=format&fit=crop" },
    { name: "Puffer Jacket", category: "Outerwear", image: "https://images.unsplash.com/photo-1545595895-64ee584246e3?q=80&w=2574&auto=format&fit=crop" },
    { name: "Silk Scarf", category: "Accessories", image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2591&auto=format&fit=crop" },
    { name: "Leather Belt", category: "Accessories", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2670&auto=format&fit=crop" },
    { name: "Wool Fedora", category: "Accessories", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=2574&auto=format&fit=crop" },
    { name: "Running Sneakers", category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop" },
    { name: "Summer Floral Dress", category: "Dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2546&auto=format&fit=crop" },
]

function generateProducts(count: number): Product[] {
    const products: Product[] = []

    for (let i = 0; i < count; i++) {
        const base = BASE_PRODUCTS[i % BASE_PRODUCTS.length]
        const variation = Math.floor(i / BASE_PRODUCTS.length) + 1

        // Add some price variation
        const basePrice = 50 + (base.name.length * 10)
        const price = basePrice + (i % 50) - 25

        products.push({
            id: (i + 1).toString(),
            name: variation > 1 ? `${base.name} ${variation}` : base.name,
            category: base.category,
            price: price,
            image: base.image
        })
    }

    return products
}

export const PRODUCTS = generateProducts(200)
