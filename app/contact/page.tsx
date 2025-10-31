import { Navbar } from "@/components/navbar"
import { ContactContent } from "@/components/contact-content"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navbar />
        <ContactContent />
        <Footer />
      </div>
    </div>
  )
}
