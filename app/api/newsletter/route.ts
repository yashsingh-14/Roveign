import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 })
        }

        // Try to create subscriber, ignore if already exists
        try {
            await prisma.subscriber.create({
                data: { email }
            })
        } catch (e) {
            // Likely unique constraint violation, which is fine
        }

        return NextResponse.json({ message: "Subscribed successfully" })
    } catch (error) {
        return NextResponse.json({ error: "Error subscribing" }, { status: 500 })
    }
}
