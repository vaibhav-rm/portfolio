"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Library Management System",
    description: "Full-stack LMS with role-based authentication, inventory tracking, and reporting",
    tags: ["Spring Boot", "MongoDB", "React", "Java"],
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=600&h=400&fit=crop",
    github: "https://github.com/vaibhav-rm/LMS",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "FormWise",
    description: "Smart form builder with validation, conditional logic, and submission tracking",
    tags: ["React", "Tailwind", "JavaScript"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28d34953?w=600&h=400&fit=crop",
    github: "https://github.com/vaibhav-rm/FormWise",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Dev Notes Blog",
    description: "Technical blog platform for sharing development insights and code snippets",
    tags: ["Next.js", "Tailwind", "MDX", "Node.js"],
    image: "https://images.unsplash.com/photo-1516534775068-bb57846d985c?w=600&h=400&fit=crop",
    github: "https://github.com/vaibhav-rm/dev-notes",
    color: "from-orange-500/20 to-red-500/20",
  },
]

export default function ProjectsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A selection of projects showcasing my skills in full-stack development
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group glass-card overflow-hidden hover:shadow-lg smooth-transition"
              >
                {/* Project Image */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-balance">{project.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 smooth-transition text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-primary font-medium hover:gap-3 smooth-transition group"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 smooth-transition" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
