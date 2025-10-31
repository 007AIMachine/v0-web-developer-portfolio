"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap, Cpu } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <ParticleBackground />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance animate-fade-in-up leading-tight">
            <span className="gradient-text">Future Developer</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Crafting digital experiences with cutting-edge technology and innovative design
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <Code2 className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Clean Code</h3>
              <p className="text-muted-foreground text-sm">Writing maintainable and scalable solutions</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Fast Performance</h3>
              <p className="text-muted-foreground text-sm">Optimized for speed and efficiency</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <Cpu className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Modern Tech</h3>
              <p className="text-muted-foreground text-sm">Using latest frameworks and tools</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto gradient-button text-background hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-background transition-all"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
