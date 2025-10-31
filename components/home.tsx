"use client"

import Link from "next/link"
import { ArrowRight, Code, Zap, Cpu } from "lucide-react"

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Future Developer
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technology and innovative design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Code, title: "Clean Code", desc: "Writing maintainable and scalable solutions" },
            { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and efficiency" },
            { icon: Cpu, title: "Modern Tech", desc: "Using latest frameworks and tools" },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 glow hover:scale-105">
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>

          <Link href="/contact">
            <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
