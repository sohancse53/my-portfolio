import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    // Animate navbar on mount
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })

    gsap.from(logoRef.current, {
      scale: 0,
      rotation: -180,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.3
    })

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background-dark/95 backdrop-blur-lg shadow-lg shadow-purple-900/10 border-b border-border-dark' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            ref={logoRef}
            className="text-xl font-bold text-gray-900 dark:text-white relative z-50" 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Abhishek
            </motion.span>
            <motion.span 
              className="text-primary-hover"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Ganvir
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                className={`relative font-medium transition-colors ${
                  index === 0 ? 'text-primary-hover' : 'text-gray-300 hover:text-primary-hover'
                }`}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-hover"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.button
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-all shadow-lg shadow-purple-900/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(147, 51, 234, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Hire Me</span>
            <motion.span 
              className="material-symbols-outlined text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              arrow_forward
            </motion.span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:bg-surface-dark relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                className="w-full h-0.5 bg-current block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 9 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current block"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -9 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                style={{ top: 0 }}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0d1117] border-l border-border-dark shadow-2xl md:hidden"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="flex flex-col h-full pt-20 px-6">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className={`py-4 px-4 rounded-lg text-base font-medium transition-colors ${
                          index === 0 
                            ? 'text-primary-hover bg-surface-dark' 
                            : 'text-gray-300 hover:text-white hover:bg-surface-dark'
                        }`}
                        variants={menuItemVariants}
                        onClick={() => setIsOpen(false)}
                        whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          <motion.span 
                            className="material-symbols-outlined text-sm"
                            whileHover={{ x: 5 }}
                          >
                            arrow_forward
                          </motion.span>
                        </div>
                      </motion.a>
                    ))}
                  </nav>

                  {/* Mobile CTA Button */}
                  <motion.button
                    className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-all shadow-lg shadow-purple-900/40"
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Hire Me</span>
                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  </motion.button>

                  {/* Social Links */}
                  <motion.div 
                    className="mt-auto mb-8 pt-8 border-t border-border-dark"
                    variants={menuItemVariants}
                  >
                    <p className="text-xs text-gray-500 mb-4">Connect with me</p>
                    <div className="flex gap-4">
                      {['github', 'linkedin', 'instagram'].map((social, index) => (
                        <motion.a
                          key={social}
                          href="#"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-dark text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <span className="material-symbols-outlined text-lg">
                            {social === 'github' ? 'code' : social === 'linkedin' ? 'work' : 'photo_camera'}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
