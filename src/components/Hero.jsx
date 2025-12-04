import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  }, [])

  const handleScrollTo = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 lg:py-0">
      <motion.div 
        className="flex lg:flex justify-center items-center relative order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img 
          ref={imageRef}
          alt="Abstract futuristic visual" 
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-cover rounded-full shadow-lg shadow-purple-500/30" 
          src="https://i.ibb.co.com/XrPWYMRW/me.jpg"
        />
      </motion.div>

      <motion.div 
        className="flex flex-col gap-y-8 order-2 lg:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="inline-flex items-center gap-2 self-start py-1 px-3 rounded-full bg-surface-dark border border-border-dark text-gray-300 text-xs font-medium"
          variants={itemVariants}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </motion.div>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-100"
          variants={itemVariants}
        >
          '<span className='text-[#7E22CE]'>MERN</span>' Stack Developer &amp; Tech Enthusiast
        </motion.h1>
        <motion.p 
          className="max-w-xl text-base sm:text-lg text-gray-400"
          variants={itemVariants}
        >
          Crafting seamless, scalable, and sophisticated digital experiences. I transform complex problems into elegant, user-centric solutions.
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-3"
          variants={itemVariants}
        >
          <motion.span 
            className="py-1.5 px-3 rounded-md text-sm bg-surface-dark border border-border-dark font-mono"
            whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
          >
            React
          </motion.span>
          <motion.span 
            className="py-1.5 px-3 rounded-md text-sm bg-surface-dark border border-border-dark font-mono"
            whileHover={{ scale: 1.05, borderColor: 'rgba(250, 204, 21, 0.5)' }}
          >
            JavaScript
          </motion.span>
          <motion.span 
            className="py-1.5 px-3 rounded-md text-sm bg-surface-dark border border-border-dark font-mono"
            whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.5)' }}
          >
            Node.js
          </motion.span>
          <motion.span 
            className="py-1.5 px-3 rounded-md text-sm bg-surface-dark border border-border-dark font-mono"
            whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
          >
            MongoDB
          </motion.span>
        </motion.div>
        <motion.div 
          className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6"
          variants={itemVariants}
        >
          <motion.button 
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-all shadow-lg shadow-purple-900/40"
            onClick={() => handleScrollTo('#portfolio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Projects
            <motion.span 
              className="material-symbols-outlined text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              arrow_outward
            </motion.span>
          </motion.button>
          <motion.a
            href="https://drive.google.com/file/d/1S4BYoprM6bmwJOs8geYoKDrta-kHFhbS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg shadow-cyan-900/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined text-lg">description</span>
            Resume
          </motion.a>
          <motion.button 
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium bg-surface-dark text-gray-200 rounded-lg hover:bg-gray-800 border border-border-dark transition-colors"
            onClick={() => handleScrollTo('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <span className="material-symbols-outlined text-lg">mail</span>
          </motion.button>
        </motion.div>
        <motion.div 
          className="flex items-center gap-4 pt-4"
          variants={itemVariants}
        >
          <motion.a 
            className="p-3 bg-surface-dark rounded-lg text-gray-400 hover:text-white transition-colors border border-border-dark" 
            href="https://github.com/sohancse53"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub Profile"
          >
            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </motion.a>
          <motion.a 
            className="p-3 bg-surface-dark rounded-lg text-gray-400 hover:text-white transition-colors border border-border-dark" 
            href="https://www.linkedin.com/in/md-shoyaif-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn Profile"
          >
            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </motion.a>
          <motion.a 
            className="p-3 bg-surface-dark rounded-lg text-gray-400 hover:text-white transition-colors border border-border-dark" 
            href="https://www.facebook.com/sohan.000000000000000000000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Facebook Profile"
          >
            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
