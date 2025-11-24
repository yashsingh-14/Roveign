"use client"

import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, Pencil, Trash } from "lucide-react"
import Image from "next/image"

const PRODUCTS = [
    {
        id: "1",
        name: "Oversized Wool Coat",
        category: "Outerwear",
        price: 299,
        stock: 12,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: "2",
        name: "Pleated Wide Leg Trousers",
        category: "Bottoms",
        price: 159,
        stock: 24,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop"
    },
    {
        id: "3",
        name: "Cashmere Turtleneck",
        category: "Knitwear",
        price: 189,
        stock: 8,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2564&auto=format&fit=crop"
    }
]

export default function AdminProductsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-heading font-bold">Products</h1>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                </Button>
            </div>

            <div className="border border-border rounded-lg overflow-hidden bg-card">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-6 py-4">Product</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {PRODUCTS.map((product) => (
                            <tr key={product.id} className="hover:bg-muted/20 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-10 w-10 rounded-md overflow-hidden bg-secondary">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-medium">{product.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">${product.price}</td>
                                <td className="px-6 py-4">
                                    <span className={product.stock < 10 ? "text-red-500 font-medium" : "text-green-500 font-medium"}>
                                        {product.stock} in stock
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
