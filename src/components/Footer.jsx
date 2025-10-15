import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-gray-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 glass-card rounded-full text-gray-300 hover:text-white mb-8 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
          
          {/* Copyright */}
          <motion.p 
            className="text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            © 2025 Professional Portfolio. Built with 
            <motion.span 
              className="inline-flex items-center mx-1 text-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.span>
            using React + Vite
          </motion.p>
          
          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>React</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span>Vite</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span>Framer Motion</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span>Tailwind CSS</span>
          </motion.div>
          
          {/* Animated Divider */}
          <motion.div 
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer