import { Navbar } from "@/components/navbar"
import { ProjectsContent } from "@/components/projects-content"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navbar />
        <ProjectsContent />
        <Footer />
      </div>
    </div>
  )
}
