"use client"

import { motion } from "framer-motion"
import { Calendar, Code, Rocket, BookOpen, CheckCircle2 } from "lucide-react"

const timelineEvents = [
  {
    year: "2023",
    title: "Diploma CSE - 5th Semester",
    description: "Pursuing diploma in Computer Science Engineering with focus on full-stack development",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2023",
    title: "Library Management System",
    description: "Built full-stack LMS using Spring Boot and MongoDB with role-based authentication",
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2024",
    title: "FormWise Project",
    description: "Created intelligent form builder with React and Tailwind CSS for dynamic form generation",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    year: "2024",
    title: "Dev Notes Blog Launch",
    description: "Launched personal technical blog using Next.js to share development insights",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-500",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <motion.span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 text-sm font-medium text-primary flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Journey Timeline
            </motion.span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Milestones and key moments in my development career
          </p>
        </motion.div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center">
                  <motion.div className={`${index % 2 === 1 ? "md:order-2" : ""}`} whileHover={{ scale: 1.02 }}>
                    <div className="group relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${event.color} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-50`}
                      />
                      <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl p-8 space-y-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className={`p-3 rounded-lg bg-gradient-to-r ${event.color}`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </motion.div>
                          <span className="text-sm font-bold text-primary">{event.year}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <div className="hidden md:flex justify-center">
                    <motion.div
                      className={`absolute w-6 h-6 rounded-full bg-gradient-to-r ${event.color} border-4 border-slate-900 shadow-lg`}
                      whileHover={{ scale: 1.3, boxShadow: `0 0 20px rgba(123, 97, 255, 0.5)` }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />
        </div>
      </div>
    </section>
  )
}
