"use client"

import { motion } from "framer-motion"
import { Target, Rocket, Zap, Users } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      title: "Problem Solver",
      description: "I break down complex challenges into elegant solutions that drive measurable results.",
      icon: Target,
    },
    {
      title: "Full-Stack Expert",
      description: "From frontend interfaces to backend systems, I build complete, scalable solutions.",
      icon: Rocket,
    },
    {
      title: "Performance Focused",
      description: "Optimizing for speed, accessibility, and user experience is at the core of everything I build.",
      icon: Zap,
    },
    {
      title: "Collaborative",
      description:
        "I work seamlessly with designers, product managers, and stakeholders to deliver exceptional results.",
      icon: Users,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            With over 2 years of experience in full-stack development, I've had the privilege of working with innovative
            and talented teams to create digital products that matter. My passion lies at the intersection of
            beautiful design and robust engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
