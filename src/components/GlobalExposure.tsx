import { motion } from 'framer-motion';
import { Globe, Plane, Briefcase, ShieldAlert } from 'lucide-react';

const exposures = [
  {
    title: "Israel Cybersecurity Training",
    location: "Ariel University, Israel",
    description: "Completed exclusive hands-on training focused on Cyber Range-based simulation environments in 2021. Collaborative research and engagements currently in progress.",
    icon: <Globe size={32} className="text-neon-blue" />
  },
  {
    title: "International Outreach",
    location: "Swinburne University & APU, Malaysia",
    description: "Engaged in academic collaboration facilitating joint research, faculty exchange, and exploring cross-border academic initiatives.",
    icon: <Plane size={32} className="text-matrix-green" />
  },
  {
    title: "Collaborative R&D",
    location: "CDAC-Chennai",
    description: "Strategic collaboration on research and consultancy, contributing to workforce training, online assessments, and generating Rs. 30 Lakhs deployment.",
    icon: <ShieldAlert size={32} className="text-purple-glow" />
  },
  {
    title: "Founder & Innovator",
    location: "Zyphron Technologies Pvt. Ltd.",
    description: "Founder of a cybersecurity startup incubated under the National Innovation and Startup Policy (NISP) at SREC SPARK, Bengaluru.",
    icon: <Briefcase size={32} className="text-neon-blue" />
  }
];

export const GlobalExposure = () => {
  return (
    <section id="global" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background World Map abstraction */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.2) 0%, transparent 50%)' }}></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwRjBGRiIgb3BhY2l0eT0iMC4yIj48L2NpcmNsZT4KPC9zdmc+')] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Global Exposure & <span className="text-neon-blue glow-text">Industry</span>
          </h2>
          <p className="text-slate-600 font-mono text-sm">
            Bridging international boundaries in cybersecurity operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exposures.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl relative group overflow-hidden border border-slate-200 hover:border-neon-blue/40 hover:bg-black/5 transition-all duration-300 flex flex-col items-center text-center sm:block sm:text-left"
            >
              <div className="absolute right-[-20%] top-[-20%] w-32 h-32 bg-neon-blue/10 blur-2xl rounded-full group-hover:bg-neon-blue/20 transition-all"></div>
              
              <div className="mb-6 relative z-10 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all duration-300 inline-block sm:block">
                {exp.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{exp.title}</h3>
              <p className="text-xs font-mono text-neon-blue mb-4 relative z-10">{exp.location}</p>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
