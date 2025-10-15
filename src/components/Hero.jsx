import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const roles = ['MERN Stack Developer', 'Python Data Scientist', 'Full Stack Engineer', 'AI Enthusiast']
  const [roleIndex, setRoleIndex] = useState(0)
  
  useEffect(() => {
    let timeout
    const currentRole = roles[roleIndex]
    
    if (text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setText('')
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 2000)
    }
    
    return () => clearTimeout(timeout)
  }, [text, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={
              left: `${Math.random() * 100}%`,
              top: '100%'
            }
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      
      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="gradient-text">Full Stack</span>
            <br />
            <span className="text-white">Developer</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="h-16 flex items-center justify-center">
            <span className="text-2xl md:text-3xl text-gray-300 font-mono">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-purple-400"
              >
                |
              </motion.span>
            </span>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting exceptional digital experiences with modern technologies. 
          Specializing in MERN stack development and Python data science 
          to build scalable, data-driven applications.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center space-x-6 mb-16"
        >
          {[
            { Icon: Github, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Mail, href: "#" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="p-3 glass-card rounded-full text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 cursor-pointer"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero