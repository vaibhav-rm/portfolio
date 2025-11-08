"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:vaibhav@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/vaibhav-rm",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/vaibhav-rm",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/vaibhav_rm",
    },
  ]

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Have an interesting project or opportunity? I'd love to hear from you!
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary smooth-transition resize-none"
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 smooth-transition"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-4 flex items-center gap-3 hover:bg-primary/10 smooth-transition"
                      >
                        <Icon size={20} className="text-primary" />
                        <span className="font-medium">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

{/* Download CV */}
<div className="glass-card p-6 space-y-4">
  <h4 className="font-bold text-lg">Download My Resume</h4>
  <p className="text-foreground/70 text-sm">Get a detailed look at my experience and skills</p>
  
  <a
    href="/Vaibhav_Rathod_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="w-full block text-center px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 smooth-transition"
  >
    Open / Download Resume
  </a>
</div>

            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="border-t border-border pt-8 text-center text-foreground/60 text-sm"
          >
            <p>© 2025 Vaibhav Rathod. Designed & built with Next JS, Tailwind & Framer Motion.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
