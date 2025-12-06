import { motion } from 'framer-motion'

const frontendTechnologies = [
  { 
    name: 'React', 
    level: 90, 
    color: 'from-cyan-500 to-blue-500',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#61DAFB"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.07 1.93l.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51z"/></svg>
  },
  { 
    name: 'JavaScript', 
    level: 85, 
    color: 'from-yellow-400 to-orange-500',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#F7DF1E"><path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/></svg>
  },
  { 
    name: 'HTML5', 
    level: 95, 
    color: 'from-orange-500 to-red-500',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#E34F26"><path d="M12 17.56l4.07-1.13.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66h-2l.29 3.19L12 17.56M4.07 3h15.86L18.5 19.2 12 21l-6.5-1.8L4.07 3z"/></svg>
  },
  { 
    name: 'CSS3', 
    level: 90, 
    color: 'from-blue-500 to-indigo-500',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#1572B6"><path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z"/></svg>
  },
  { 
    name: 'Tailwind CSS', 
    level: 88, 
    color: 'from-cyan-400 to-teal-500',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#06B6D4"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/></svg>
  },
  { 
    name: 'Framer Motion', 
    level: 75, 
    color: 'from-pink-500 to-purple-500',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#BB4B96"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
  },
  { 
    name: 'DaisyUI', 
    level: 80, 
    color: 'from-purple-400 to-pink-400',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#5A0EF8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>
  }
]

const backendTechnologies = [
  { 
    name: 'Node.js', 
    level: 85, 
    color: 'from-green-500 to-emerald-600',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#68A063"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47-.02-.12-.11-.21-.22-.21h-.97c-.12 0-.23.1-.23.23 0 1.24.68 2.74 3.97 2.74 2.39 0 3.75-.94 3.75-2.59 0-1.64-1.11-2.08-3.44-2.39-2.34-.31-2.47-.46-2.47-1 0-.45.19-1.05 1.85-1.05 1.47 0 2.01.32 2.24 1.32.02.1.11.18.22.18h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z"/></svg>
  },
  { 
    name: 'Express.js', 
    level: 82, 
    color: 'from-gray-400 to-gray-600',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
  },
  { 
    name: 'MongoDB', 
    level: 80, 
    color: 'from-green-600 to-green-800',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
  },
  { 
    name: 'Firebase', 
    level: 75, 
    color: 'from-yellow-500 to-orange-600',
    icon: <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#FFCA28"><path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>
  }
]

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <motion.p 
          className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The tools and technologies I use to build modern, robust, and scalable web applications.
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-16 max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30">
              <span className="text-2xl sm:text-3xl">💻</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Frontend</h3>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {frontendTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-xl p-5 sm:p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="transition-transform group-hover:scale-110 duration-300 mb-4">
                    {tech.icon}
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg backdrop-blur-sm border border-green-500/30">
              <span className="text-2xl sm:text-3xl">⚙️</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Backend</h3>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {backendTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-xl p-5 sm:p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="transition-transform group-hover:scale-110 duration-300 mb-4">
                    {tech.icon}
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                    {tech.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-12 sm:mt-16 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-purple-500/30">
              <span className="text-3xl sm:text-4xl">💡</span>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Always Learning</h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Continuously exploring new technologies and improving my skills to stay ahead in the ever-evolving world of web development.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
