import { motion } from 'framer-motion'
import { Code, Database, BarChart3 } from 'lucide-react'

const LoadingScreen = () => {
  const icons = [Code, Database, BarChart3]
  
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [1000, -100],
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%'
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Icons Animation */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>

        {/* Text */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text">Loading</span>
          <br />
          <span className="text-white">Portfolio</span>
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Preparing amazing experience...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen