"use client"

import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const ORDERS = [
    {
        id: "ORD-001",
        customer: "Olivia Martin",
        date: "Feb 20, 2024",
        total: 299,
        status: "Processing",
    },
    {
        id: "ORD-002",
        customer: "Jackson Lee",
        date: "Feb 19, 2024",
        total: 159,
        status: "Shipped",
    },
    {
        id: "ORD-003",
        customer: "Isabella Nguyen",
        date: "Feb 18, 2024",
        total: 450,
        status: "Delivered",
    }
]

export default function AdminOrdersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-heading font-bold">Orders</h1>
            </div>

            <div className="border border-border rounded-lg overflow-hidden bg-card">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-6 py-4">Order ID</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Total</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {ORDERS.map((order) => (
                            <tr key={order.id} className="hover:bg-muted/20 transition-colors">
                                <td className="px-6 py-4 font-medium">{order.id}</td>
                                <td className="px-6 py-4">{order.customer}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4">${order.total}</td>
                                <td className="px-6 py-4">
                                    <span className={
                                        order.status === "Delivered" ? "px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium" :
                                            order.status === "Shipped" ? "px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium" :
                                                "px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium"
                                    }>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="icon">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
