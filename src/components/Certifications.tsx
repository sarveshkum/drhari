import { motion } from 'framer-motion';
import { Award, ShieldCheck, Lock, CheckCircle, BadgeAlert } from 'lucide-react';

const certs = [
  { name: "Certified Chief Information Security Officer", issuer: "EC-Council", icon: <Lock size={40} className="text-neon-blue mb-4" /> },
  { name: "Certified Ethical Hacker", issuer: "EC-Council", icon: <ShieldCheck size={40} className="text-matrix-green mb-4" /> },
  { name: "Certified EC-Council Instructor", issuer: "EC-Council", icon: <Award size={40} className="text-purple-glow mb-4" /> },
  { name: "Certified Blockchain Associate", issuer: "Kerala Blockchain Academy", icon: <CheckCircle size={40} className="text-neon-blue mb-4" /> },
  { name: "Practical Linux for Pentesting & Bug Bouties", issuer: "EC-Council", icon: <BadgeAlert size={40} className="text-matrix-green mb-4" /> },
  { name: "Certified Ethical Hacker - C|EH", issuer: "EC-Council", icon: <ShieldCheck size={40} className="text-purple-glow mb-4" /> },
  { name: "Certified in Cyber Security", issuer: "ISC2", icon: <Lock size={40} className="text-neon-blue mb-4" /> },
  { name: "Introduction to Dark web, Anonymity, and Cryptocurrency", issuer: "EC-Council", icon: <Award size={40} className="text-matrix-green mb-4" /> },
  { name: "SQL Injection Attacks", issuer: "EC-Council", icon: <ShieldCheck size={40} className="text-purple-glow mb-4" /> },
  { name: "Ethical Hacking Essentials (EHE)", issuer: "EC-Council", icon: <CheckCircle size={40} className="text-neon-blue mb-4" /> },
  { name: "Introduction to Control Systems Security", issuer: "International Society of Automation", icon: <Lock size={40} className="text-matrix-green mb-4" /> },
  { name: "Certified Network Security Specialist (CNSS)", issuer: "ICSI, UK", icon: <BadgeAlert size={40} className="text-purple-glow mb-4" /> },
  { name: "Certified Blockchain Associate (ID: 0236011)", issuer: "Kerala Blockchain Academy", icon: <Award size={40} className="text-neon-blue mb-4" /> },
  { name: "Certified Cyber Security Professional - Level I", issuer: "National Cyber Safety and Security Standards", icon: <ShieldCheck size={40} className="text-matrix-green mb-4" /> },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Security <span className="text-neon-blue glow-text">Certifications</span>
          </h2>
          <p className="text-slate-600 font-mono text-sm">
            14 Industry-Recognized Credentials
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] group cursor-default"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 transform group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all duration-300">
                  {cert.icon}
                </div>
              </div>
              <h3 className="text-slate-900 font-semibold text-sm leading-tight mt-2 group-hover:text-neon-blue transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-slate-600 mt-2 font-mono">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
