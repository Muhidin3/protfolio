"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-card border-t border-border py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div initial={{ x: -20 }} whileInView={{ x: 0 }} className="text-muted-foreground mb-4 md:mb-0">
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Your Name
            </p>
          </motion.div>

          <motion.div initial={{ x: 20 }} whileInView={{ x: 0 }} className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="text-center text-sm text-muted-foreground mt-4 pt-4 border-t border-border"
        >
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
