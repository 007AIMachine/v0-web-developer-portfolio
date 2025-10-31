import { Navbar } from "@/components/navbar"
import { AboutContent } from "@/components/about-content"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navbar />
        <AboutContent />
        <Footer />
      </div>
    </div>
  )
}
