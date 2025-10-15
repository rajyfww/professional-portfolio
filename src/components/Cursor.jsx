import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Cursor = ({ mousePosition }) => {
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.classList.contains('hoverable')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 0.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      {/* Outer cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-white/30 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15
        }}
      />
    </>
  )
}

export default Cursor