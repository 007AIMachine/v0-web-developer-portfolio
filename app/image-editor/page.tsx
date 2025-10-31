import { Navbar } from "@/components/navbar"
import { ImageEditorContent } from "@/components/image-editor-content"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Footer } from "@/components/footer"

export default function ImageEditorPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navbar />
        <ImageEditorContent />
        <Footer />
      </div>
    </div>
  )
}
