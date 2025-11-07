"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Ollama VScode Extension",
      description: "An extension as frontend in vscode for the ollama api.",
      tags: ["TypeScript", "VScode"],
      color: "from-purple-500 to-pink-500",
      stats: { users: "1.2k+", uptime: "99.9%" },
    },
    {
      title: "Formwise",
      description: "A google forms alternative made for modern form / survey needs includes power analytics tools.",
      tags: ["React", "Firebase"],
      color: "from-cyan-500 to-blue-500",
      stats: { datapoints: "1M+", latency: "<100ms", users: "5k+" },
    },
    {
      title: "Vaibhav Dev Notes",
      description: "A bloging website where people can even create their account and post their own blogs.",
      tags: ["React", "Appwrite"],
      color: "from-orange-500 to-red-500",
      stats: { documents: "100k+", apiCalls: "500k+", accuracy: "95%" },
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-balance">
            <span>Showcase of </span>
            <span className="gradient-text">impact</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Here are some projects I'm particularly proud of. Each represents solving unique challenges at scale.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-card overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            {value}
                          </p>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{key}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 text-slate-300 rounded-full hover:border-purple-500/50 smooth-transition"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        Explore Project
                        <ArrowUpRight size={20} />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Visual */}
                <motion.div
                  className={`relative rounded-xl overflow-hidden h-72 bg-gradient-to-br ${project.color} opacity-15`}
                  whileHover={{ opacity: 0.25 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.3 }}
                  />
                  <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                    <ExternalLink size={48} className="text-white/20" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-purple-500/50 text-white hover:bg-purple-500/10 font-semibold smooth-transition"
            >
              View All Projects
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
