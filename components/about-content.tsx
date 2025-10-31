"use client"

import { User, Code2, Lightbulb, Target, Award, Coffee } from "lucide-react"

export function AboutContent() {
  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
    "Next.js",
  ]

  const stats = [
    { icon: Code2, label: "Projects Completed", value: "50+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Target, label: "Happy Clients", value: "25+" },
  ]

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital solutions with modern technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">My Story</h2>
              </div>
              <p className="text-gray-300 mb-4">
                I'm a passionate full-stack developer with over 5 years of experience creating innovative web
                applications. My journey began with curiosity about how websites work, and it has evolved into a deep
                love for crafting seamless digital experiences.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in modern JavaScript frameworks, particularly React.js, and enjoy working with cutting-edge
                technologies to solve complex problems. My approach combines technical expertise with creative
                problem-solving.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Core Values</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Innovation</h3>
                  <p className="text-gray-300">Always exploring new technologies and methodologies</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Quality</h3>
                  <p className="text-gray-300">Writing clean, maintainable, and scalable code</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Collaboration</h3>
                  <p className="text-gray-300">Working effectively with teams and stakeholders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 px-4 py-2 rounded-full text-cyan-400 font-medium hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
