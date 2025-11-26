import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CATEGORIES = [
    // Men
    { name: "Men's T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" },
    { name: "Men's Shirts", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2576&auto=format&fit=crop" },
    { name: "Men's Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2573&auto=format&fit=crop" },
    { name: "Men's Trousers", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2574&auto=format&fit=crop" },
    { name: "Men's Shorts", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop" },
    { name: "Men's Suits", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2680&auto=format&fit=crop" },
    { name: "Men's Blazers", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop" },
    { name: "Men's Jackets", image: "https://images.unsplash.com/photo-1551028919-ac76c9028b1e?q=80&w=2574&auto=format&fit=crop" },
    { name: "Men's Coats", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop" },
    { name: "Men's Hoodies", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2574&auto=format&fit=crop" },
    { name: "Men's Sweatshirts", image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2672&auto=format&fit=crop" },
    { name: "Men's Activewear", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2670&auto=format&fit=crop" },
    { name: "Men's Swimwear", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2574&auto=format&fit=crop" },
    { name: "Men's Underwear", image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2669&auto=format&fit=crop" },
    { name: "Men's Sleepwear", image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e704e?q=80&w=2576&auto=format&fit=crop" },
    { name: "Men's Shoes", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2680&auto=format&fit=crop" },
    { name: "Men's Boots", image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=2574&auto=format&fit=crop" },
    { name: "Men's Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop" },
    { name: "Men's Accessories", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2670&auto=format&fit=crop" },
    { name: "Men's Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2574&auto=format&fit=crop" },

    // Women
    { name: "Women's Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop" },
    { name: "Women's Tops", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=2574&auto=format&fit=crop" },
    { name: "Women's Blouses", image: "https://images.unsplash.com/photo-1551163943-3f6a29e39bb7?q=80&w=2566&auto=format&fit=crop" },
    { name: "Women's Jeans", image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=2515&auto=format&fit=crop" },
    { name: "Women's Skirts", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=2664&auto=format&fit=crop" },
    { name: "Women's Pants", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop" },
    { name: "Women's Shorts", image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=2596&auto=format&fit=crop" },
    { name: "Women's Jumpsuits", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2574&auto=format&fit=crop" },
    { name: "Women's Blazers", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2536&auto=format&fit=crop" },
    { name: "Women's Jackets", image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?q=80&w=2536&auto=format&fit=crop" },
    { name: "Women's Coats", image: "https://images.unsplash.com/photo-1545595895-64ee584246e3?q=80&w=2574&auto=format&fit=crop" },
    { name: "Women's Knitwear", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2564&auto=format&fit=crop" },
    { name: "Women's Activewear", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2670&auto=format&fit=crop" },
    { name: "Women's Swimwear", image: "https://images.unsplash.com/photo-1575202332411-b01fe9ace7a8?q=80&w=2574&auto=format&fit=crop" },
    { name: "Women's Lingerie", image: "https://images.unsplash.com/photo-1596472537566-8f4d7b195d48?q=80&w=2574&auto=format&fit=crop" },
    { name: "Women's Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2680&auto=format&fit=crop" },
    { name: "Women's Boots", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2564&auto=format&fit=crop" },
    { name: "Women's Heels", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2624&auto=format&fit=crop" },
    { name: "Women's Bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2669&auto=format&fit=crop" },
    { name: "Women's Jewelry", image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=2662&auto=format&fit=crop" },

    // Unisex / Accessories
    { name: "Hats & Caps", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=2574&auto=format&fit=crop" },
    { name: "Scarves", image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2591&auto=format&fit=crop" },
    { name: "Gloves", image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?q=80&w=2670&auto=format&fit=crop" },
    { name: "Belts", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2670&auto=format&fit=crop" },
    { name: "Sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2680&auto=format&fit=crop" },
    { name: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2599&auto=format&fit=crop" },
    { name: "Wallets", image: "https://images.unsplash.com/photo-1627123424574-183730f214f9?q=80&w=2676&auto=format&fit=crop" },
    { name: "Socks", image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50f82?q=80&w=2572&auto=format&fit=crop" },
    { name: "Tech Accessories", image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?q=80&w=2670&auto=format&fit=crop" },
    { name: "Travel Gear", image: "https://images.unsplash.com/photo-1565514020175-0517fd43b94d?q=80&w=2574&auto=format&fit=crop" }
]

const ADJECTIVES = ["Premium", "Luxury", "Classic", "Modern", "Urban", "Vintage", "Essential", "Signature", "Limited Edition", "Organic", "Sustainable", "Handcrafted", "Elegant", "Casual", "Formal", "Sport", "Tech", "Cozy", "Lightweight", "Heavyweight"]

const MATERIALS = ["Cotton", "Wool", "Silk", "Linen", "Leather", "Denim", "Cashmere", "Velvet", "Suede", "Nylon"]

async function main() {
    console.log('Start seeding ...')

    // Create Categories
    const categoryMap = new Map()

    for (const cat of CATEGORIES) {
        const category = await prisma.category.upsert({
            where: { name: cat.name },
            update: {},
            create: {
                name: cat.name,
                image: cat.image
            }
        })
        categoryMap.set(cat.name, category.id)
        console.log(`Created category: ${cat.name}`)
    }

    // Generate 300 Products
    const productsToCreate = []

    for (let i = 0; i < 300; i++) {
        const categoryIndex = i % CATEGORIES.length
        const category = CATEGORIES[categoryIndex]
        const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
        const material = MATERIALS[Math.floor(Math.random() * MATERIALS.length)]

        const name = `${adjective} ${material} ${category.name.split(' ').pop()}`
        const price = Math.floor(Math.random() * 300) + 20 // Price between 20 and 320

        productsToCreate.push({
            name: name,
            description: `Experience the finest quality with our ${name}. Crafted from premium ${material}, this item from our ${category.name} collection is designed for both style and comfort. Perfect for any occasion.`,
            price: price,
            stock: Math.floor(Math.random() * 100),
            image: category.image, // Using category image for now to ensure valid URLs
            categoryId: categoryMap.get(category.name)
        })
    }

    // Batch insert products
    try {
        const chunkSize = 100
        for (let i = 0; i < productsToCreate.length; i += chunkSize) {
            const chunk = productsToCreate.slice(i, i + chunkSize)
            for (const p of chunk) {
                await prisma.product.create({ data: p })
            }
            console.log(`Seeded batch ${i / chunkSize + 1}`)
        }
    } catch (e) {
        console.error("Error batch seeding:", e)
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
