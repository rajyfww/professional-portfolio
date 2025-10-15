import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  BarChart3, 
  Brain,
  FileSpreadsheet,
  TrendingUp,
  Layers,
  Globe
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "MERN Stack",
      description: "Full-stack web development",
      icon: Globe,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", level: 90, icon: Database },
        { name: "Express.js", level: 95, icon: Server },
        { name: "React.js", level: 98, icon: Code },
        { name: "Node.js", level: 92, icon: Layers }
      ]
    },
    {
      title: "Python Data Science",
      description: "Data analysis & visualization",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "NumPy", level: 88, icon: Brain },
        { name: "Pandas", level: 92, icon: FileSpreadsheet },
        { name: "Matplotlib", level: 85, icon: TrendingUp },
        { name: "Python", level: 95, icon: Code }
      ]
    },
    {
      title: "Additional Tech",
      description: "Supporting technologies",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "TypeScript", level: 85, icon: Code },
        { name: "PostgreSQL", level: 88, icon: Database },
        { name: "Docker", level: 80, icon: Layers },
        { name: "AWS", level: 82, icon: Server }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise in modern web technologies and data science tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="glass-card p-8 group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400">
                    {category.description}
                  </p>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <SkillIcon className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-400 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.2,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 
              'Express.js', 'MongoDB', 'PostgreSQL', 'NumPy', 'Pandas', 
              'Matplotlib', 'Git', 'Docker', 'AWS', 'Firebase', 'Tailwind CSS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + (index * 0.05) }}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium text-gray-300 hover:scale-110 transition-transform duration-200 cursor-default"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(139, 92, 246, 0.1)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills