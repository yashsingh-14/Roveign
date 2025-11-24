"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ProfilePage() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    if (status === "unauthenticated") {
        redirect("/login")
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-16 container-width">
                <div className="max-w-2xl mx-auto space-y-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-heading font-bold">My Profile</h1>
                        <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
                            Sign Out
                        </Button>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Email</label>
                            <p className="text-lg">{session?.user?.email}</p>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">User ID</label>
                            <p className="text-sm font-mono text-muted-foreground">{session?.user?.id}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold">Order History</h2>
                        <div className="bg-card border border-border rounded-lg p-8 text-center text-muted-foreground">
                            No orders found.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
