"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    const links = [
        { href: "/admin", label: "Overview", icon: LayoutDashboard },
        { href: "/admin/products", label: "Products", icon: Package },
        { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
        { href: "/admin/customers", label: "Customers", icon: Users },
        { href: "/admin/settings", label: "Settings", icon: Settings },
    ]

    return (
        <div className="min-h-screen flex bg-muted/20">
            {/* Sidebar */}
            <aside className="w-64 bg-background border-r border-border hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <Link href="/" className="text-xl font-heading font-bold tracking-tight">
                        ROVEIGN <span className="text-xs font-sans font-normal text-muted-foreground ml-2">Admin</span>
                    </Link>
                </div>
                <div className="flex-1 py-6 px-4 space-y-1">
                    {links.map((link) => {
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                <span>{link.label}</span>
                            </Link>
                        )
                    })}
                </div>
                <div className="p-4 border-t border-border">
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive" asChild>
                        <Link href="/">
                            <LogOut className="h-4 w-4 mr-2" />
                            Exit Admin
                        </Link>
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 border-b border-border bg-background/50 backdrop-blur-sm flex items-center px-6 justify-between md:hidden">
                    <span className="font-bold">Admin Panel</span>
                    {/* Mobile menu trigger could go here */}
                </header>
                <div className="flex-1 overflow-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}
