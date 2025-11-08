"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient: string
  delay?: number
  initialX?: number
  initialY?: number
}

export default function FloatingCard({
  icon,
  title,
  description,
  gradient,
  delay = 0,
  initialX = 0,
  initialY = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      draggable
      drag
      dragElastic={0.2}
      dragMomentum={false}
      initial={{ x: initialX, y: initialY }}
      animate={{
        y: [0, -25, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 5 + delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
      className="cursor-grab active:cursor-grabbing"
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.08 }}
    >
      <div className="w-72 h-64 glass-card p-8 rounded-2xl flex flex-col justify-between group hover:shadow-2xl transition-shadow duration-300">
        {/* Icon wrapper with animation */}
        <motion.div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="text-white w-8 h-8">{icon}</div>
        </motion.div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Interactive indicator */}
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
