import { Card } from "@/components/ui/card"
import { Code2, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a passionate web developer dedicated to creating beautiful, functional, and accessible web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Clean Code</h3>
            <p className="text-muted-foreground leading-relaxed">
              Writing maintainable, scalable code following best practices and modern design patterns.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
              <Palette className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Design Focus</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bridging the gap between design and development with pixel-perfect implementations.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Performance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Optimizing for speed and efficiency to deliver exceptional user experiences.
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            With over 5 years of experience in web development, I've worked with startups and established companies to
            build products that users love. My expertise spans the full stack, from crafting intuitive user interfaces
            to architecting robust backend systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or
            exploring the latest web technologies. I believe in continuous learning and sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </section>
  )
}
