import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (hasVisited) {
      setLoading(false)
    }
  }, [])

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasVisited', 'true')
    setLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <div className="font-sans bg-gray-50 dark:bg-background-dark text-gray-800 dark:text-gray-300 antialiased overflow-hidden relative">
        <BackgroundEffects />
        <div className="min-h-screen relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28">
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="portfolio">
              <Portfolio />
            </section>
            <section id="tech">
              <TechStack />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
