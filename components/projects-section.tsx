"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github, Eye, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Agency Management",
    description:
    "A full-stack agency management platform with React, Node.js, and Mongodb. Features include user authentication, user management, service management, and admin dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Material UI","AWS"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
    "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS","Material UI","vercel"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
    image: "/task-management-app.png",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Finance-Tracker",
    description:
      "A responsive portfolio website with smooth animations, dark/light mode toggle, and optimized performance. Built with Next.js and Framer Motion.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Analytics Dashboard",
    description:
      "A comprehensive weather analytics dashboard that visualizes weather data with interactive charts and forecasting capabilities using D3.js and weather APIs.",
    image: "/weather-dashboard-analytics-charts.jpg",
    technologies: ["React", "Express.js", "MongoDB"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with smooth animations, dark/light mode toggle, and optimized performance. Built with Next.js and Framer Motion.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript","Three.js","Radix UI"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },

]

const categories = ["All", "Frontend", "Backend", "Full-Stack"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in various technologies and problem-solving
            approaches.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Highlighted Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`featured-${project.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 flex items-center justify-center gap-4"
                        >
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground hover:bg-card/70 hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8">All Projects</h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and interesting projects. Let's create something amazing
              together!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.querySelector("#contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-full"
              >
                Get In Touch
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
