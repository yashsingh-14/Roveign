import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const categoryId = searchParams.get('categoryId')

        const products = await prisma.product.findMany({
            where: categoryId ? { categoryId } : undefined,
            include: {
                category: true
            }
        })

        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const product = await prisma.product.create({
            data: body
        })
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
