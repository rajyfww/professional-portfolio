import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, TrendingUp, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+', color: 'from-purple-500 to-pink-500' },
    { icon: Database, label: 'Databases Managed', value: '25+', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, label: 'Data Models Built', value: '30+', color: 'from-green-500 to-emerald-500' },
    { icon: Users, label: 'Happy Clients', value: '15+', color: 'from-orange-500 to-red-500' }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Passionate Developer & Data Scientist
            </h3>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                With <span className="text-purple-400 font-semibold">4+ years</span> of experience in full-stack development, 
                I specialize in creating robust, scalable applications using the MERN stack. 
                My journey in technology has led me to master both web development and data science.
              </p>
              
              <p>
                I'm passionate about leveraging <span className="text-blue-400 font-semibold">Python's data science ecosystem</span> 
                to extract meaningful insights from complex datasets. From building trading algorithms 
                to developing healthcare management systems, I bring a unique blend of technical expertise and analytical thinking.
              </p>
              
              <p>
                My goal is to bridge the gap between <span className="text-green-400 font-semibold">beautiful user interfaces</span> 
                and <span className="text-yellow-400 font-semibold">intelligent data processing</span>, 
                creating applications that are not only visually appealing but also data-driven and insightful.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {['Problem Solving', 'Team Leadership', 'Agile Development', 'Continuous Learning'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <motion.div
                    className="text-3xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (0.1 * index) }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About