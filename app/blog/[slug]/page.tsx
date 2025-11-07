"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { blogPosts } from "@/lib/blog-posts"
import { ArrowLeft, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import type { JSX } from "react/jsx-runtime" // Import JSX to declare HeadingTag

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-foreground/60">Post not found</p>
      </div>
    )
  }

  if (!mounted) return null

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground smooth-transition"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-foreground/60 text-sm">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readingTime} minute read
                </div>
              </div>

              <p className="text-lg text-foreground/70">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert max-w-none mb-16 space-y-6"
          >
            <div className="text-foreground/80 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("#")) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1
                  const text = paragraph.replace(/^#+\s*/, "")
                  const HeadingTag = `h${Math.min(level, 3)}` as keyof JSX.IntrinsicElements
                  return (
                    <HeadingTag
                      key={index}
                      className={level === 1 ? "text-3xl font-bold mt-8 mb-4" : "text-xl font-bold mt-6 mb-3"}
                    >
                      {text}
                    </HeadingTag>
                  )
                }

                if (paragraph.startsWith("```")) {
                  const match = paragraph.match(/```(\w+)?\n([\s\S]*?)```/)
                  if (match) {
                    return (
                      <pre key={index} className="glass-card p-4 overflow-x-auto">
                        <code className="text-sm text-cyan-300">{match[2].trim()}</code>
                      </pre>
                    )
                  }
                }

                if (paragraph.startsWith("-")) {
                  return (
                    <ul key={index} className="space-y-2 pl-5">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>{item.replace(/^-\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }

                return (
                  <p key={index} className="text-foreground/80 leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-border pt-16 space-y-8"
            >
              <h2 className="text-3xl font-bold">Related Articles</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass-card p-6 h-full cursor-pointer hover:shadow-lg smooth-transition"
                    >
                      <div className="space-y-3">
                        <h3 className="font-bold text-lg leading-tight">{relatedPost.title}</h3>

                        <p className="text-sm text-foreground/70">{relatedPost.excerpt}</p>

                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                          <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{relatedPost.readingTime}m</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </article>
      </main>
    </div>
  )
}
