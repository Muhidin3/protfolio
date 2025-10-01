"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"

// Skill categories with logos and proficiency levels
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        level: 95,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
      },
      {
        name: "Next.js",
        level: 88,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#000000",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4",
      },
      {
        name: "Material UI",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", 
        color: "#CC6699",
      },
      {
        name: "Three.js",
        level: 50,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg",
        color: "#CC6699",          
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        level: 88,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
      },
      {
        name: "Express.js",
        level: 82,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        color: "#000000",
      },
      {
        name: "Python",
        level: 40,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776AB",
      },
      {
        name: "PostgreSQL",
        level: 8,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#336791",
      },
      {
        name: "MongoDB",
        level: 78,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
      },
      {
        name: "GraphQL",
        level: 30,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        color: "#E10098",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032",
      },
      {
        name: "Docker",
        level: 10,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "#2496ED",
      },
      {
        name: "AWS S3",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        color: "#FF9900",          
      },
      {
        name: "Figma",
        level: 10,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#F24E1E",
      },
      {
        name: "VS Code",
        level: 95,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007ACC",
      },
    ],
  },
]

const certifications = [
  "Will",
  "Be",
  "Updated",
  "Soon",
  // "AWS Certified Developer",
  // "Google Cloud Professional",
  // "React Developer Certification",
  // "MongoDB Certified Developer",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and
            tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-card/50 border-border/50 hover:bg-card/70 transition-colors">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-8 h-8 flex-shrink-0">
                          <img
                            src={skill.logo || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain"
                            style={{ filter: "brightness(1.1)" }}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-16 overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories
              .flatMap((category) => category.skills)
              .map((skill, index) => (
                <motion.div
                  key={`floating-${skill.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: `0 10px 25px ${skill.color}20`,
                  }}
                  className="group"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full hover:bg-card/70 transition-colors">
                    <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="w-5 h-5" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
