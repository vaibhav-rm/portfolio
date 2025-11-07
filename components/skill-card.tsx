"use client"

import type React from "react"
import type { LucideIcon } from "lucide-react"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

interface SkillCardProps {
  icon: LucideIcon
  name: string
  level: number
  index: number
}

export function SkillCard({ icon: IconComponent, name, level, index }: SkillCardProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="group relative cursor-grab active:cursor-grabbing"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-slate-900 border border-slate-700/50 rounded-xl p-6 overflow-hidden backdrop-blur-sm">
        {/* Animated gradient accent */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <IconComponent className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors" />
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronRight className="w-5 h-5 text-purple-400/60 group-hover:text-purple-400 transition-colors" />
            </motion.div>
          </div>

          <h4 className="font-semibold text-white text-base">{name}</h4>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-slate-400">Proficiency</span>
              <span className="text-sm font-bold text-purple-400">{level}%</span>
            </div>
            <motion.div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
