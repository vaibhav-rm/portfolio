"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { projectsData } from "@/lib/projects-data"
import Navigation from "@/components/navigation"
import { Github, ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(projectsData.flatMap((p) => p.tags))).sort()

  const filteredProjects = selectedTag ? projectsData.filter((p) => p.tags.includes(selectedTag)) : projectsData

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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground smooth-transition"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold">All Projects</h1>
              <p className="text-lg text-foreground/60 max-w-2xl">
                Explore my complete collection of projects spanning full-stack development, frontend design, and backend
                architecture.
              </p>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Filter by Technology</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full font-medium smooth-transition ${
                  selectedTag === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground/70 hover:text-foreground"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full font-medium smooth-transition ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group glass-card overflow-hidden h-full hover:shadow-lg smooth-transition cursor-pointer"
              >
                {/* Main project link */}
                <Link href={`/projects/${project.slug}`} className="block">
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
                    <div>
                      <span className="text-xs text-primary font-semibold">{project.year}</span>
                      <h3 className="text-xl font-bold mt-2 group-hover:text-primary smooth-transition">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-foreground/70 text-sm leading-relaxed">{project.shortDescription}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* GitHub Link - outside main Link to avoid nested <a> */}
                <div className="flex gap-2 p-6 pt-0">
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
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-lg text-foreground/60">No projects found with the selected filter.</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
