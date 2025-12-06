import { motion } from 'framer-motion'

export default function Education() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
            Educational Qualification
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            My academic journey in computer science and engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-3xl sm:text-4xl text-white">
                        school
                      </span>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                          Bachelor of Science
                        </h3>
                        <p className="text-base sm:text-lg text-purple-400 font-medium">
                          Computer Science & Engineering
                        </p>
                      </div>
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 self-start"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <span className="text-xs font-medium text-purple-300">Pursuing</span>
                      </motion.div>
                    </div>

                    <div className="flex items-start gap-2 mb-4">
                      <span className="material-symbols-outlined text-cyan-400 text-xl mt-0.5">
                        location_on
                      </span>
                      <div>
                        <p className="text-base sm:text-lg text-gray-300 font-medium">
                          University of Information Technology & Sciences
                        </p>
                        <p className="text-sm text-gray-400">(UITS)</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                      <motion.span 
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-surface-dark border border-border-dark text-gray-300 font-mono"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                      >
                        Data Structures
                      </motion.span>
                      <motion.span 
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-surface-dark border border-border-dark text-gray-300 font-mono"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                      >
                        Algorithms
                      </motion.span>
                      <motion.span 
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-surface-dark border border-border-dark text-gray-300 font-mono"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                      >
                        Web Development
                      </motion.span>
                      <motion.span 
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-surface-dark border border-border-dark text-gray-300 font-mono"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                      >
                        Database Systems
                      </motion.span>
                      <motion.span 
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-surface-dark border border-border-dark text-gray-300 font-mono"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                      >
                        Software Engineering
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 backdrop-blur-sm">
            <span className="material-symbols-outlined text-purple-400 text-lg">
              emoji_events
            </span>
            <p className="text-sm text-gray-300">
              Focused on Full Stack Development & Modern Web Technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
