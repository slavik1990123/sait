import { motion } from 'framer-motion'

export default function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05060d]" />

      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[70vmax] w-[70vmax] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(59, 99, 255, 0.55), transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: ['0%', '18%', '-6%', '0%'],
          y: ['0%', '-10%', '14%', '0%'],
        }}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[10%] -right-1/4 h-[60vmax] w-[60vmax] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.5), transparent 62%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: ['0%', '-14%', '8%', '0%'],
          y: ['0%', '12%', '-8%', '0%'],
        }}
        transition={{ duration: 44, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[10%] h-[55vmax] w-[55vmax] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(62, 224, 200, 0.35), transparent 62%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: ['0%', '16%', '-10%', '0%'],
          y: ['0%', '-14%', '10%', '0%'],
        }}
        transition={{ duration: 52, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[35%] left-[35%] h-[40vmax] w-[40vmax] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.22), transparent 65%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: ['0%', '-12%', '14%', '0%'],
          y: ['0%', '10%', '-12%', '0%'],
        }}
        transition={{ duration: 48, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="noise" />
    </div>
  )
}
