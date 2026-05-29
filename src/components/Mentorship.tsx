import { motion } from 'framer-motion';
import { Mic, Activity, Presentation } from 'lucide-react';

export const Mentorship = () => {
  return (
    <section className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Advisory & <span className="text-matrix-green glow-text">Mentorship</span>
          </h2>
          <div className="h-[2px] w-24 bg-matrix-green mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start bg-black/5 p-6 rounded-xl border border-black/5 hover:border-matrix-green/30 transition-colors">
              <Mic className="text-matrix-green shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Executive Speaker & Trainer</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Delivered keynote and expert sessions for leadership forums, cybersecurity communities, and professional training programs. 
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neon-blue/80">
                  <span className="bg-black/5 px-2 py-1 rounded">VIT</span>
                  <span className="bg-black/5 px-2 py-1 rounded">DBRAIT-Andaman</span>
                  <span className="bg-black/5 px-2 py-1 rounded">KGISL (ATAL FDP)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-black/5 p-6 rounded-xl border border-black/5 hover:border-neon-blue/30 transition-colors">
              <Presentation className="text-neon-blue shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">TNStartup Mentor</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Recognized as a Mentor under the TNStartup Initiative, advising early-stage cybersecurity startups on product strategy, technical direction, execution, and market readiness.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-xl text-center border-t-2 border-matrix-green flex flex-col justify-center min-h-[160px] col-span-2">
              <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center">
                10<span className="text-matrix-green">+</span>
              </div>
              <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">Executive Talks & Keynotes</p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl text-center border-l-2 border-purple-glow flex flex-col justify-center min-h-[160px] col-span-2">
              <Activity className="text-purple-glow w-full mb-3" size={32} />
              <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center">
                5<span className="text-purple-glow">+</span> Years
              </div>
              <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">Innovation Mentorship</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
