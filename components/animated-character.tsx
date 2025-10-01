"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Code2, Sparkles } from "lucide-react"

export function AnimatedCharacter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-40 pointer-events-none">
      <motion.div
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.015,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="relative"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Robot head */}
          <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl relative border-2 border-primary/30 shadow-lg shadow-primary/20">
            {/* Antenna */}
            <motion.div
              animate={{
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-accent"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full"
              />
            </motion.div>

            {/* Eyes - animated code symbols */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute top-5 left-3 text-background"
            >
              <Code2 className="w-4 h-4" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.3,
              }}
              className="absolute top-5 right-3 text-background"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>

            {/* Mouth - terminal line */}
            <motion.div
              animate={{
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-background rounded-full"
            />

            {/* Blinking cursor */}
            <motion.div
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute bottom-4 right-3 w-1 h-3 bg-background"
            />
          </div>

          {/* Floating code symbols around character */}
          {["</>", "{}", "()"].map((symbol, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1,
              }}
              className="absolute text-xs font-mono font-bold text-accent"
              style={{
                left: `${-10 + i * 20}px`,
                top: `${-15 - i * 5}px`,
              }}
            >
              {symbol}
            </motion.div>
          ))}

          {/* Sparkle particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${Math.cos((i * Math.PI) / 2) * 35 + 10}px`,
                top: `${Math.sin((i * Math.PI) / 2) * 35 + 10}px`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
