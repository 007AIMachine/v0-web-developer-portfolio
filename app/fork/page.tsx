import { Navbar } from "@/components/navbar"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Footer } from "@/components/footer"
import { Github } from "lucide-react"

export default function ForkPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Fork This Project
            </h1>
            <p className="text-gray-300 mb-8 text-lg">Get the source code and customize it for your needs</p>
            <a
              href="https://github.com/your-username/portfolio"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
