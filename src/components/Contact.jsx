import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  {
    name: 'Email',
    detail: 'sohan0020p@gmail.com',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
    bgColor: 'bg-purple-600/20',
    textColor: 'text-purple-400',
    go: 'mailto:sohan0020p@gmail.com'
  },
  {
    name: 'WhatsApp',
    detail: '+880 1775194511',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
    bgColor: 'bg-green-600/20',
    textColor: 'text-green-400',
    go: 'https://wa.me/8801775194511'
  },
  {
    name: 'Phone',
    detail: '+880 1717662167',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
    bgColor: 'bg-cyan-600/20',
    textColor: 'text-cyan-400',
    go: 'tel:+8801717662167'
  },
  {
    name: "LinkedIn",
    detail: 'Connect with me',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>,
    bgColor: 'bg-blue-600/20',
    textColor: 'text-blue-400',
    go: 'https://www.linkedin.com/in/md-shoyaif-rahman/'
  },
  {
    name: 'Facebook',
    detail: 'Follow me',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    bgColor: 'bg-blue-600/20',
    textColor: 'text-blue-500',
    go: 'https://www.facebook.com/sohan.000000000000000000000000'
  },
  {
    name: 'Github',
    detail: 'View my code',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>,
    bgColor: 'bg-gray-600/20',
    textColor: 'text-gray-300',
    go: 'https://github.com/sohancse53'
  }
]

export default function Contact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formContainerRef = useRef(null)
  const inputRefs = useRef([])
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    // Animate title with GSAP
    gsap.fromTo(titleRef.current,
      { 
        opacity: 0,
        y: -50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate form container with 3D effect
    gsap.fromTo(formContainerRef.current,
      {
        opacity: 0,
        rotateX: -15,
        y: 100
      },
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate input fields sequentially
    inputRefs.current.forEach((input, index) => {
      if (input) {
        gsap.fromTo(input,
          {
            opacity: 0,
            x: -50,
            rotateY: -20
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: input,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      // Using Web3Forms API (free service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c177013e-1d65-4233-8e72-56329b8fe751', // You need to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'sohan0020p@gmail.com',
          subject: `New Contact Form Message from ${formData.name}`,
          from_name: 'Portfolio Contact Form'
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', message: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' })
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly at sohan0020p@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(147, 51, 234, 0.4)',
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2 
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>
      <motion.div 
        ref={formContainerRef}
        className="mt-12 sm:mt-16 max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#212121] rounded-2xl border border-gray-800 shadow-2xl shadow-purple-900/20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ perspective: '1000px' }}
      >
        <div className="space-y-8">
          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <span className="material-symbols-outlined text-gray-400">share</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">Have something to discuss? Send me a message and let's talk.</p>
            
            {submitStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg mb-4 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">
                    {submitStatus.type === 'success' ? 'check_circle' : 'error'}
                  </span>
                  <span className="text-sm">{submitStatus.message}</span>
                </div>
              </motion.div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div 
                ref={el => inputRefs.current[0] = el}
                className="relative group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  person
                </motion.span>
                <input 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
                  placeholder="Your Name" 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  onFocus={(e) => {
                    gsap.to(e.target, { scale: 1.02, duration: 0.2 })
                  }}
                  onBlur={(e) => {
                    gsap.to(e.target, { scale: 1, duration: 0.2 })
                  }}
                />
              </motion.div>
              <motion.div 
                ref={el => inputRefs.current[1] = el}
                className="relative group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  mail
                </motion.span>
                <input 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
                  placeholder="Your Email" 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  onFocus={(e) => {
                    gsap.to(e.target, { scale: 1.02, duration: 0.2 })
                  }}
                  onBlur={(e) => {
                    gsap.to(e.target, { scale: 1, duration: 0.2 })
                  }}
                />
              </motion.div>
              <motion.div 
                ref={el => inputRefs.current[2] = el}
                className="relative group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="material-symbols-outlined absolute left-3 top-4 text-gray-500"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  chat_bubble
                </motion.span>
                <textarea 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 h-32 resize-none transition-all" 
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  onFocus={(e) => {
                    gsap.to(e.target, { scale: 1.02, duration: 0.2 })
                  }}
                  onBlur={(e) => {
                    gsap.to(e.target, { scale: 1, duration: 0.2 })
                  }}
                ></textarea>
              </motion.div>
              <motion.button 
                ref={el => inputRefs.current[3] = el}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-900/40 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={isSubmitting}
                variants={buttonVariants}
                whileHover={!isSubmitting ? "hover" : {}}
                whileTap={!isSubmitting ? "tap" : {}}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                ></motion.span>
                {isSubmitting ? (
                  <>
                    <motion.span
                      className="material-symbols-outlined text-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      progress_activity
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">send</span>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-1">Connect With Me</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-teal-500 mb-6"></div>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                target="blank"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:bg-gray-800/70 transition-colors relative overflow-hidden group" 
                  href={link.go}
                  initial={{ opacity: 0, x: -50, rotateY: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    x: 10, 
                    scale: 1.03,
                    boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                  <motion.div 
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${link.bgColor} ${link.textColor} relative z-10`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.div>
                  <div className="relative z-10">
                    <motion.h4 
                      className="font-semibold text-white"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-gray-400"
                      whileHover={{ x: 5 }}
                    >
                      {link.detail}
                    </motion.p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
