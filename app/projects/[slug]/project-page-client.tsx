"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ArrowLeft, Github } from "lucide-react"

// Define the Project type if it's not already defined elsewhere and imported
interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  year: string
  tags: string[]
  github: string
  color: string
  image: string | null
  problem: string
  solution: string
  keyFeatures: string[]
  results: string
  technologies: {
    backend: string[]
    frontend: string[]
    other: string[]
  }
}

interface ProjectPageClientProps {
  project: Project
  relatedProjects: Project[]
}

export default function ProjectPageClient({ project, relatedProjects }: ProjectPageClientProps) {
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 space-y-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground smooth-transition"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary font-semibold">{project.year}</span>
                <span className="text-foreground/40">•</span>
                <span className="text-sm text-foreground/60">{project.tags.length} technologies</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold">{project.title}</h1>
              <p className="text-lg text-foreground/70 leading-relaxed">{project.shortDescription}</p>
            </div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 smooth-transition"
              >
                <Github size={18} />
                View Code
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`mb-16 rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} h-96 sm:h-[500px]`}
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-12 mb-20"
          >
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Problem & Solution */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Problem</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">{project.problem}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Solution</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">{project.solution}</p>
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold">Key Features</h2>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-primary">✓</span>
                      </span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Results */}
              <motion.div variants={itemVariants} className="glass-card p-8 space-y-4">
                <h3 className="text-2xl font-bold">Results & Impact</h3>
                <p className="text-lg text-foreground/70">{project.results}</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="md:col-span-1 space-y-8">
              {/* Technologies */}
              <div className="glass-card p-6 space-y-6">
                <h3 className="text-xl font-bold">Technologies Used</h3>

                {project.technologies.backend.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.backend.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.frontend.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.other.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.other.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* All Tags */}
              <div className="glass-card p-6 space-y-4">
                <h4 className="font-semibold">All Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-muted text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-t border-border pt-20 space-y-12"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold">
                Related Projects
              </motion.h2>

              <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`}>
                    <motion.div
                      variants={itemVariants}
                      className="group glass-card overflow-hidden hover:shadow-lg smooth-transition cursor-pointer"
                    >
                      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${relatedProject.color}`}>
                        <img
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                        />
                      </div>

                      <div className="p-6 space-y-3">
                        <h3 className="text-lg font-bold group-hover:text-primary smooth-transition">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-foreground/70">{relatedProject.shortDescription}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
