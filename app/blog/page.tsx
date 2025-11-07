"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { blogPosts } from "@/lib/blog-posts"
import { ArrowLeft, Clock } from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags))).sort()

  const filteredPosts = selectedTag ? blogPosts.filter((p) => p.tags.includes(selectedTag)) : blogPosts

  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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

  const featuredPosts = sortedPosts.filter((p) => p.featured).slice(0, 2)
  const regularPosts = sortedPosts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
              <h1 className="text-5xl sm:text-6xl font-bold">Technical Blog</h1>
              <p className="text-lg text-foreground/60 max-w-2xl">
                Insights on full-stack development, best practices, and lessons learned from building production
                applications.
              </p>
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mb-16 space-y-8">
              <motion.h2 variants={itemVariants} className="text-2xl font-bold">
                Featured Articles
              </motion.h2>
              <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <motion.div
                      variants={itemVariants}
                      className="group glass-card p-8 h-full hover:shadow-lg smooth-transition cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-foreground/60">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readingTime} min read
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold group-hover:text-primary smooth-transition">{post.title}</h3>

                        <p className="text-foreground/70 leading-relaxed">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Filter by Topic</h3>
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

          {/* All Posts */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
            <h2 className="text-2xl font-bold mb-8">
              {selectedTag ? `Articles tagged "${selectedTag}"` : "All Articles"}
            </h2>

            {sortedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <motion.div
                  variants={itemVariants}
                  className="group glass-card p-6 hover:shadow-lg smooth-transition cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold group-hover:text-primary smooth-transition">{post.title}</h3>

                      <p className="text-foreground/70 text-sm">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-foreground/60 flex-shrink-0">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readingTime}m
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Empty state */}
          {sortedPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-lg text-foreground/60">No posts found with the selected filter.</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
