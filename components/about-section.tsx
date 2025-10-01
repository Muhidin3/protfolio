"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin, Coffee, Gamepad2, Music, Camera, Video, Book, BookOpen } from "lucide-react"

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Acube Foundation",
    period: "2023 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
    technologies: ["Next.js", "TypeScript", "Node.js", "AWS", "MongoDB"],
  },
  // {
  //   title: "Frontend Developer",
  //   company: "Digital Solutions Co.",
  //   period: "2021 - 2023",
  //   description: "Built responsive user interfaces and improved user experience across multiple products.",
  //   technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
  // },
  // {
  //   title: "Junior Developer",
  //   company: "StartUp Labs",
  //   period: "2020 - 2021",
  //   description: "Developed features for mobile and web applications while learning modern development practices.",
  //   technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
  // },
]

const interests = [
  { icon: Coffee, label: "Coffee Enthusiast", color: "text-amber-500" },
  { icon: BookOpen, label: "Reading", color: "text-blue-500" },
  { icon: Video, label: "Video Editing", color: "text-purple-500" },
  { icon: Camera, label: "Photography", color: "text-green-500" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    MS
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Muhidin Shemsu</h3>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 4 years of experience creating digital solutions that
                  make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I believe in continuous learning and staying
                  up-to-date with the latest industry trends.
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6 backdrop-blur-sm bg-card/50 border-border/50">
              <h4 className="text-lg font-semibold mb-4">When I'm not coding...</h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                  >
                    <interest.icon className={`w-5 h-5 ${interest.color}`} />
                    <span className="text-sm font-medium">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-12 pb-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <Card className="p-6 backdrop-blur-sm bg-card/50 border-border/50 hover:bg-card/70 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <Badge variant="secondary" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5+", label: "Projects Completed" },
              { number: "1+", label: "Years Experience" },
              { number: "1+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
