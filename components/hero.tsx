"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Zap, Globe, PenTool, Layers } from "lucide-react"
import Link from "next/link"
import FloatingCard from "./floating-card"

export default function Hero() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const techBadges = [
    { icon: Code, label: "Full Stack", color: "from-purple-500 to-pink-500" },
    { icon: Zap, label: "High Performance", color: "from-yellow-500 to-orange-500" },
    { icon: Globe, label: "Production Ready", color: "from-cyan-500 to-blue-500" },
  ]

  const featureCards = [
    {
      title: "Clean Code",
      description: "Maintainable, scalable architectures",
      gradient: "from-purple-500 to-pink-500",
      delay: 0,
      initialX: 0,
      initialY: 0,
    },
    {
      title: "High Performance",
      description: "Optimized for speed & reliability",
      gradient: "from-cyan-500 to-blue-500",
      delay: 1,
      initialX: 80,
      initialY: 120,
    },
    {
      title: "Global Ready",
      description: "Production-grade solutions",
      gradient: "from-orange-500 to-red-500",
      delay: 2,
      initialX: -60,
      initialY: 180,
    },
    {
      title: "Maintainable",
      description: "Well-documented, easy to extend",
      gradient: "from-green-500 to-emerald-500",
      delay: 1.5,
      initialX: 120,
      initialY: 300,
    },
    {
      title: "Scalable",
      description: "Architectures that grow with you",
      gradient: "from-indigo-500 to-purple-500",
      delay: 2.5,
      initialX: -100,
      initialY: 400,
    },
  ]

  return (
    <section className="relative min-h-[120vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 backdrop-blur"
              >
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl sm:text-7xl font-black leading-tight text-balance space-y-2"
              >
                <div>
                  <span className="gradient-text">I build things</span>
                </div>
                <div className="text-white">
                  that <span className="gradient-accent">scale</span>
                </div>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-400 leading-relaxed max-w-xl text-balance"
              >
                Self-taught full-stack developer crafting elegant, performant solutions. Specializing in React, Spring
                Boot, and modern web architectures.
              </motion.p>
            </div>

            {/* Tech Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {techBadges.map((badge) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={badge.label}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${badge.color} bg-opacity-10 border border-current border-opacity-20 backdrop-blur`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{badge.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 smooth-transition"
                >
                  View My Work
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/30 text-white rounded-xl font-semibold hover:bg-purple-500/10 smooth-transition"
                >
                  Let's Connect
                </a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
              {[
                { value: "10+", label: "Projects" },
                { value: "15+", label: "Tech Stack" },
                { value: "2+", label: "Years Exp" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <motion.p
                    className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Draggable Cards */}
          <motion.div variants={itemVariants} className="relative hidden lg:block h-full min-h-screen">
            <div className="absolute inset-0 flex items-center justify-center">
              {featureCards.map((card, index) => (
                <FloatingCard
                  key={card.title}
                  icon={getIconForCard(index)}
                  title={card.title}
                  description={card.description}
                  gradient={card.gradient}
                  delay={card.delay}
                  initialX={card.initialX}
                  initialY={card.initialY}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-purple-500 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getIconForCard(index: number) {
  const icons = [Code, Zap, Globe, PenTool, Layers]
  const Icon = icons[index % icons.length]
  return <Icon className="w-8 h-8" />
}
