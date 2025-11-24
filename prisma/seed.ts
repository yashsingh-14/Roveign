import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Create Categories
    const categories = await Promise.all([
        prisma.category.create({
            data: {
                name: 'Men',
                image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop'
            }
        }),
        prisma.category.create({
            data: {
                name: 'Women',
                image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop'
            }
        }),
        prisma.category.create({
            data: {
                name: 'Accessories',
                image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1887&auto=format&fit=crop'
            }
        })
    ])

    // Create Products
    await prisma.product.create({
        data: {
            name: 'Premium Cotton Tee',
            description: 'A high-quality cotton t-shirt designed for comfort and style.',
            price: 45.00,
            stock: 100,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop',
            categoryId: categories[0].id
        }
    })

    await prisma.product.create({
        data: {
            name: 'Silk Blouse',
            description: 'Elegant silk blouse perfect for any occasion.',
            price: 120.00,
            stock: 50,
            image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1974&auto=format&fit=crop',
            categoryId: categories[1].id
        }
    })

    await prisma.product.create({
        data: {
            name: 'Leather Wallet',
            description: 'Genuine leather wallet with multiple card slots.',
            price: 85.00,
            stock: 75,
            image: 'https://images.unsplash.com/photo-1627123424574-181ce5171c98?q=80&w=1887&auto=format&fit=crop',
            categoryId: categories[2].id
        }
    })

    console.log('Seed data created successfully')
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
