import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
    typescript: true,
})

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST(req: Request) {
    const { items } = await req.json()

    if (!items || items.length === 0) {
        return new NextResponse("Product ids are required", { status: 400 })
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    items.forEach((item: any) => {
        line_items.push({
            quantity: item.quantity,
            price_data: {
                currency: 'USD',
                product_data: {
                    name: item.name,
                    images: [item.image],
                    metadata: {
                        color: item.color,
                        size: item.size
                    }
                },
                unit_amount: item.price * 100, // Amount in cents
            }
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        billing_address_collection: 'required',
        phone_number_collection: {
            enabled: true,
        },
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart?canceled=1`,
        metadata: {
            orderId: "12345", // Example order ID
        },
    })

    return NextResponse.json({ url: session.url }, {
        headers: corsHeaders
    })
}
