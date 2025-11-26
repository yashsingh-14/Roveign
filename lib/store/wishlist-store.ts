import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Product {
    id: string
    name: string
    price: number
    image: string
    category: string
}

interface WishlistStore {
    items: Product[]
    addItem: (item: Product) => void
    removeItem: (id: string) => void
    isInWishlist: (id: string) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => {
                const items = get().items
                if (!items.find((i) => i.id === item.id)) {
                    set({ items: [...items, item] })
                }
            },
            removeItem: (id) => {
                set({ items: get().items.filter((i) => i.id !== id) })
            },
            isInWishlist: (id) => {
                return !!get().items.find((i) => i.id === id)
            },
        }),
        {
            name: 'wishlist-storage',
        }
    )
)
