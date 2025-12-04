import { motion } from 'framer-motion'

export default function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="mt-16 sm:mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center text-sm font-medium text-gray-400">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.name}
                  className="hover:text-primary-hover transition-colors cursor-pointer"
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleScrollTo(link.href)
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 Shoyaif Rahman. All rights reserved.
              </p>
              <motion.button
                className="p-2 rounded-full bg-surface-dark hover:bg-white/10 border border-border-dark transition-colors cursor-pointer"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <motion.span 
                  className="material-symbols-outlined text-base text-gray-400"
                  whileHover={{ y: -2 }}
                >
                  arrow_upward
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
