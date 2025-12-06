import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    // Animate navbar on mount
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
    }

    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.3 }
      )
    }

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'tech', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItemVariants = {
    closed: {
      opacity: 0
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home', icon: 'home' },
    { name: 'About', href: '#about', icon: 'person' },
    { name: 'Portfolio', href: '#portfolio', icon: 'work' },
    { name: 'Tech Stack', href: '#tech', icon: 'code' },
    { name: 'Education', href: '#education', icon: 'school' },
    { name: 'Contact', href: '#contact', icon: 'mail' }
  ]

  const handleLinkClick = (href) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
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

  return (
    <motion.header 
      ref={navRef}
      initial={{ opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-background-dark/95 backdrop-blur-lg shadow-lg shadow-purple-900/10 border-b border-border-dark' 
          : 'bg-background-dark/80 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            ref={logoRef}
            className="text-sm sm:text-base lg:text-lg font-mono font-bold text-gray-900 dark:text-white relative z-[60] flex items-center gap-0.5 sm:gap-1" 
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#home')
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              &lt;
            </motion.span>
            <motion.span
              className="text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Shoyaif
            </motion.span>
            <motion.span
              className="text-white mx-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              _
            </motion.span>
            <motion.span
              className="text-pink-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Rahman
            </motion.span>
            <motion.span
              className="text-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              /&gt;
            </motion.span>
            <motion.span 
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.a>

          <div className="hidden lg:flex items-center space-x-8 text-sm">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                className={`relative font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary-hover' 
                    : 'text-gray-300 hover:text-primary-hover'
                }`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary-hover"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === link.href.substring(1) ? '100%' : 0 
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#contact')
            }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-all shadow-lg shadow-purple-900/30"
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
          </motion.a>

          <motion.button 
            className="lg:hidden p-2 rounded-md text-gray-400 hover:bg-surface-dark hover:text-white relative z-[60] menu-button"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                className="w-full h-0.5 bg-white block rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 9 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -9 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                style={{ top: 0, left: 0, right: 0, bottom: 0 }}
              />

              <motion.div
                className="mobile-menu fixed top-0 right-0 bottom-0 w-[70%] max-w-[250px] bg-gradient-to-b from-[#0d1117] to-[#1a1625] border-l border-border-dark shadow-2xl lg:hidden overflow-y-auto z-50"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ height: '100vh' }}
              >
                <div className="flex flex-col h-full pt-14 px-4 pb-5">
                  <motion.div 
                    className="mb-6 p-3 bg-surface-dark rounded-xl border border-border-dark"
                    variants={menuItemVariants}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-base">
                        SR
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">Shoyaif Rahman</h3>
                        <p className="text-xs text-gray-400">Mern Stack Developer</p>
                      </div>
                    </div>
                  </motion.div>

                  <nav className="flex flex-col space-y-2 flex-1">
                    {navLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleLinkClick(link.href)
                        }}
                        className={`py-3 px-3.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2.5 ${
                          activeSection === link.href.substring(1)
                            ? 'text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-900/30' 
                            : 'text-gray-300 hover:text-white hover:bg-surface-dark'
                        }`}
                        variants={menuItemVariants}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="material-symbols-outlined text-lg">
                          {link.icon}
                        </span>
                        <span className="flex-1 text-sm">{link.name}</span>
                        <motion.span 
                          className="material-symbols-outlined text-xs"
                          animate={{ x: activeSection === link.href.substring(1) ? [0, 5, 0] : 0 }}
                          transition={{ duration: 1, repeat: activeSection === link.href.substring(1) ? Infinity : 0 }}
                        >
                          arrow_forward
                        </motion.span>
                      </motion.a>
                    ))}
                  </nav>

                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick('#contact')
                    }}
                    className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-900/40"
                    variants={menuItemVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Hire Me</span>
                    <span className="material-symbols-outlined text-base">rocket_launch</span>
                  </motion.a>

                  <motion.p 
                    className="mt-4 text-center text-xs text-gray-500"
                    variants={menuItemVariants}
                  >
                    © 2025 Shoyaif Rahman
                  </motion.p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
