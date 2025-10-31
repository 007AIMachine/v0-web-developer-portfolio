import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and analytics.",
      image: "/task-management-dashboard.png",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using OpenAI API with custom templates and export options.",
      image: "/ai-content-generator-interface.png",
      tags: ["Next.js", "OpenAI", "Prisma", "Supabase"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS for portfolio websites with drag-and-drop builder and custom component library.",
      image: "/cms-dashboard-interface.jpg",
      tags: ["React", "Express", "MongoDB", "AWS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location search, forecasts, and interactive maps.",
      image: "/weather-dashboard-interface.png",
      tags: ["Next.js", "TypeScript", "Mapbox", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform for social media metrics with data visualization and reporting features.",
      image: "/analytics-dashboard.png",
      tags: ["React", "D3.js", "Node.js", "Redis"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of my recent work showcasing various technologies and approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden group bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-accent text-accent hover:bg-accent hover:text-background bg-transparent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="gradient-button text-background hover:opacity-90">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
