import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'ArtLane',
    description: 'Digital Art Showcase Gallery...',
    img: 'https://i.ibb.co.com/BK7KHMjM/1.png',
    gitClientLink:'https://github.com/sohancse53/ArtLane',
    gitServerLink:'https://github.com/sohancse53/ArtLane-server',
    liveLink:'https://artlane50.netlify.app/'
  },
  {
    title: 'AppLab',
    description: 'React App Store Simulation...',
    img: 'https://i.ibb.co.com/8DkykVk0/2.png',
        gitClientLink:'https://github.com/sohancse53/AppLab',
        gitServerLink:'',
    liveLink:'https://applab50.netlify.app/'
  },
  {
    title: 'ZapShift',
    description: 'A Parcel taking application full stack...',
    img: 'https://i.ibb.co.com/Mkfqjfd9/3.png',
       gitClientLink:'https://github.com/sohancse53/ZapShift-Client',
        gitServerLink:'https://github.com/sohancse53/ZapShift-Server',
    liveLink:'https://applab50.netlify.app/'
    
  }
]

export default function Portfolio() {
  const projectsRef = useRef([])

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.fromTo(project,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          rotateY: index % 2 === 0 ? -15 : 15
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
          Project Showcase
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Explore my journey through various projects. Each project represents a milestone in my continuous learning path.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            ref={el => projectsRef.current[index] = el}
            className="bg-[#16152a] p-6 rounded-xl border border-border-dark/50 flex flex-col gap-4"
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(126, 34, 206, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-lg overflow-hidden">
              <img alt={`${project.title} project thumbnail`} className="w-full h-60 object-cover" src={project.img} />
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a target='blank' className=" flex items-center gap-1 text-purple-400 hover:text-purple-300" href={project.liveLink}>
                Demo
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
              <a target='blank' className="border py-1 px-2 rounded-lg flex items-center gap-1 text-gray-300 hover:text-white" href={project.gitClientLink}>
                Client
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            {
              project.gitServerLink &&   <a target='blank' className="border py-1 px-2 rounded-lg flex items-center gap-1 text-gray-300 hover:text-white" href={project.gitServerLink}>
                server
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            }
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
