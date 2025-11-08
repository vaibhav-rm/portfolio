"use client"

import { motion } from "framer-motion"
import { SkillCard } from "./skill-card"
import {
  Coffee,
  Leaf,
  Zap,
  Database,
  Plug,
  Lock,
  BarChart3,
  Radio,
  TypeIcon,
  Palette,
  Sparkles,
  Globe,
  Heart,
  Gamepad2,
  GitBranch,
  Dock as Docker,
  Mail,
  Code2,
  Hammer,
  Package,
  Rocket,
  Cloud,
} from "lucide-react"

const skillCategories = [
  {
    name: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: Leaf },
      { name: "Node.js", icon: Zap },
      { name: "MongoDB", icon: Database },
      { name: "RESTful APIs", icon: Plug },
      { name: "JWT Auth", icon: Lock },
      { name: "PostgreSQL", icon: BarChart3 },
    ],
  },
  {
    name: "Frontend",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", icon: Sparkles },
      { name: "TypeScript", icon: TypeIcon },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Framer Motion", icon: Sparkles },
      { name: "Next.js", icon: Rocket },
      { name: "HTML/CSS", icon: Globe },
    ],
  },
  {
    name: "Tools & DevOps",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Docker },
      { name: "Postman", icon: Mail },
      { name: "VS Code", icon: Code2 },
      { name: "Maven", icon: Hammer },
      { name: "npm/yarn", icon: Package },
      { name: "CI/CD", icon: Rocket },
      { name: "AWS", icon: Cloud },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <motion.span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/50 text-sm font-medium text-purple-400">
              Technical Arsenal
            </motion.span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Drag any card to rearrange. A comprehensive overview of my technical proficiencies across full-stack
            development
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <motion.div
                  className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-2xl font-bold mt-3">{category.name}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => (
                  <SkillCard key={skill.name} {...skill} index={catIndex * 8 + idx} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
