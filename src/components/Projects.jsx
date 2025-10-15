import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Database, Code, BarChart3, Globe, Smartphone, TrendingUp } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: "Cryptocurrency Trading Platform",
      description: "Advanced trading system with real-time market data, technical analysis, and automated trading algorithms. Features 80%+ win rate with sophisticated risk management.",
      tech: ["React", "Node.js", "Python", "TradingView API", "MongoDB"],
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      category: "Full Stack + Data Science"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform managing patient records, appointments, and medical history. Built with .NET Core and modern authentication systems.",
      tech: [".NET Core", "React", "SQL Server", "Azure", "Identity Framework"],
      icon: Database,
      gradient: "from-blue-500 to-cyan-500",
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      category: "Enterprise Application"
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Data-driven dashboard providing deep insights into e-commerce performance with predictive analytics and automated reporting using Python data science stack.",
      tech: ["Python", "Pandas", "Matplotlib", "React", "Express.js"],
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-500",
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      category: "Data Science"
    },
    {
      title: "MERN Stack Social Platform",
      description: "Modern social media platform with real-time messaging, file uploads, and advanced user interactions. Features responsive design and optimized performance.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      category: "MERN Stack"
    },
    {
      title: "Video Processing Automation",
      description: "Automated video processing system for gaming content creation, featuring highlight extraction, thumbnail generation, and batch processing capabilities.",
      tech: ["Python", "FFmpeg", "MoviePy", "OpenCV", "React"],
      icon: Smartphone,
      gradient: "from-indigo-500 to-purple-500",
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      category: "Automation"
    },
    {
      title: "Market Analysis API",
      description: "Comprehensive API serving financial market data with 20+ technical indicators, real-time scanning of 2000+ cryptocurrencies, and accuracy scoring algorithms.",
      tech: ["Python", "FastAPI", "NumPy", "Pandas", "Redis"],
      icon: Code,
      gradient: "from-teal-500 to-green-500",
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      category: "API Development"
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of full-stack applications and data science solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card group hover:scale-105 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ProjectIcon className="w-16 h-16 text-white/60" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full font-mono"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects