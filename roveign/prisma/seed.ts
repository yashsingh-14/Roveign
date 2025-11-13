import { prisma } from '../lib/prisma'

async function main() {
  await prisma.product.createMany({
    data: [
      {
        slug: 'golden-royal-gown',
        title: 'Golden Royal Gown',
        description: 'Handcrafted luxury gown with premium finish.',
        priceCents: 129999,
        images: ['https://res.cloudinary.com/demo/image/upload/sample.jpg'],
        category: 'women',
        inventory: 10
      },
      {
        slug: 'silver-sovereign-suit',
        title: 'Silver Sovereign Suit',
        description: 'Tailored premium men’s suit with royal elegance.',
        priceCents: 89999,
        images: ['https://res.cloudinary.com/demo/image/upload/sample.jpg'],
        category: 'men',
        inventory: 12
      }
    ]
  })
}

main()
  .then(() => {
    console.log('Seed complete.')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
