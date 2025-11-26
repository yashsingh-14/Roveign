"use client"

import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return (
        <div className={cn("font-heading font-black tracking-[0.2em] text-2xl uppercase select-none", className)}>
            ROVEIGN
        </div>
    )
}
