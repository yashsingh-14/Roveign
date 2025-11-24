import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LayoutDashboard, Package, ShoppingCart, Users, LogOut } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gradient">Roveign Admin</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/admin">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/admin/products">
                            <Package className="mr-2 h-4 w-4" />
                            Products
                        </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/admin/orders">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Orders
                        </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/admin/users">
                            <Users className="mr-2 h-4 w-4" />
                            Users
                        </Link>
                    </Button>
                </nav>
                <div className="p-4 border-t border-border">
                    <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
