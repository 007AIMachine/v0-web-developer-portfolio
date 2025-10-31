import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Prisma", "Supabase"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Vercel", "Docker", "Figma", "VS Code", "Webpack", "Vite"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
