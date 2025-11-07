"use client"

import { motion } from "framer-motion"
import { Star, Quote, Users, Award, Briefcase } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Vaibhav transformed our entire product with meticulous attention to detail and exceptional problem-solving skills. His technical expertise and proactive approach made him invaluable.",
      author: "Sarah Chen",
      role: "CEO, TechStartup Inc.",
      icon: Users,
      company: "TechStartup Inc.",
    },
    {
      content:
        "Working with Vaibhav was a complete game-changer. His technical prowess combined with outstanding communication and reliability made our project a massive success.",
      author: "Alex Rodriguez",
      role: "Product Manager, Digital Labs",
      icon: Briefcase,
      company: "Digital Labs",
    },
    {
      content:
        "The most talented and professional developer I've had the privilege to collaborate with. He consistently delivered beyond expectations on every metric and milestone.",
      author: "Emma Wilson",
      role: "Founder, WebFlow Studio",
      icon: Award,
      company: "WebFlow Studio",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <motion.span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 text-sm font-medium text-primary">
              Client Feedback
            </motion.span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            What Clients{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Trusted by industry leaders and innovative startups
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon
            return (
              <motion.div
                key={testimonial.author}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl p-8 h-full flex flex-col">
                  <div className="absolute top-6 right-6">
                    <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-slate-300 mb-8 leading-relaxed flex-grow text-base">{testimonial.content}</p>

                  <div className="pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{testimonial.author}</div>
                        <div className="text-xs text-slate-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
