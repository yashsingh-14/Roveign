import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import Hero from "@/components/feature/Hero"
import FeaturedProducts from "@/components/feature/FeaturedProducts"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <FeaturedProducts />
            <Footer />
        </main>
    );
}
