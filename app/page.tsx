import { Navbar } from "@/components/navbar"
import { Home } from "@/components/home"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  )
}
