import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: 'code', number: '3+', title: 'Projects', description: 'Innovative web applications' },
  { icon: 'psychology', number: '10+', title: 'Skills Learned', description: 'Acquired a diverse range of modern tech skills' },
  { icon: 'rocket_launch', number: 'AI', title: 'Future Aspirations', description: 'Aiming to specialize in AI and data science' }
]

export default function About() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
          About Me
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Hello, I'm <span className="text-white font-medium">Shoyaif Rahman</span>, passionate about building smart and scalable web   applications. I've completed a Mern development course and constantly explore new technologies to refine my skills. Focused on continuous learning, I aim to transition into the IT industry and eventually move towards AI and data science.
        </p>
      </div>
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            ref={el => cardsRef.current[index] = el}
            className="bg-[#16152a] p-8 rounded-xl border border-transparent hover:border-purple-500/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="p-4 inline-block bg-white/10 rounded-xl">
                  <span className="material-symbols-outlined text-3xl text-purple-400">{stat.icon}</span>
                </div>
                <span className="text-5xl font-bold text-gray-500">{stat.number}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{stat.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{stat.description}</p>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-purple-400 transition-colors absolute bottom-8 right-8 text-2xl">arrow_outward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
