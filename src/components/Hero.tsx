import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="h-[2px] w-12 bg-neon-blue inline-block"></span>
            <span className="text-neon-blue font-mono font-medium tracking-wider uppercase text-sm">
              Welcome to the System
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Dr. Harihara Gopalan S
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-black h-[80px] md:h-auto"
          >
            <span className="mr-3 text-black">&gt;</span>
            <TypeAnimation
              sequence={[
                'CISO Certified',
                2000,
                'Research Leader',
                2000,
                'Founder of Zyphron Technologies ',
                2000,
                'Cyber Security Architect',
                2000,

              ]}
              wrapper="span"
              speed={50}
              className="text-black font-bold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed border-l-2 border-purple-glow pl-4"
          >
            18+ Years in Cyber Security, Wireless Networks & Advanced Research. Securing the Future with Intelligence & Innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a
              href="#research"
              className="flex items-center gap-2 px-8 py-4 bg-neon-blue/10 border border-neon-blue text-neon-blue font-semibold rounded hover:bg-neon-blue/20 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all group"
            >
              View Research
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-purple-glow/10 border border-purple-glow text-purple-glow font-semibold rounded hover:bg-purple-glow/20 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
