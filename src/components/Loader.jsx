import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Loader({ onLoadingComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 1000)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 blur-3xl opacity-50"
          animate={{
            background: [
              'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
            ]
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="relative w-20 h-20">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-500 border-l-purple-500"
              animate={{ rotate: -360 }}
              transition={{ duration: 0.8, ease: 'linear', repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                SR
              </motion.span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
