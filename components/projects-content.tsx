"use client"

import { useState } from "react"
import { ExternalLink, Github, Filter, Code, Smartphone, Globe } from "lucide-react"

export function ProjectsContent() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/modern-ecommerce-interface.png",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/task-management-dashboard.png",
      category: "web",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Mobile Weather App",
      description: "React Native weather application with location services",
      image: "/weather-app-interface.png",
      category: "mobile",
      technologies: ["React Native", "API Integration", "Geolocation"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio with futuristic design and animations",
      image: "/futuristic-portfolio-design.jpg",
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics",
      image: "/data-analytics-dashboard.png",
      category: "web",
      technologies: ["React", "D3.js", "Chart.js", "Python"],
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration",
      image: "/ai-chat-interface.png",
      category: "ai",
      technologies: ["React", "Socket.io", "OpenAI API", "Node.js"],
      github: "#",
      live: "#",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "web", label: "Web Apps", icon: Code },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "ai", label: "AI Projects", icon: Filter },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and creativity
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-cyan-500 text-black"
                    : "bg-gray-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-cyan-500/20"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
