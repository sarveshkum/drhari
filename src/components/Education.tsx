import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Ph.D in Information & Communication Eng.",
    institution: "Anna University",
    specialization: "Wireless Networks",
    year: "2017",
    color: "neon-blue"
  },
  {
    degree: "M.E. in Computer Science and Engineering",
    institution: "Anna University",
    specialization: "Computer Science",
    year: "2010",
    color: "purple-glow"
  },
  {
    degree: "Masters in Computer Application (MCA)",
    institution: "PSG College of Arts and Science",
    specialization: "Computer Applications",
    year: "2008",
    color: "matrix-green"
  },
  {
    degree: "B.Sc (Applied Sciences – IT)",
    institution: "Sri Ramakrishna Engineering College",
    specialization: "Information Technology",
    year: "2004",
    color: "slate-400"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between border-b border-slate-200 pb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 flex items-center gap-3">
            <GraduationCap className="text-neon-blue" size={40} />
            Professional <span className="text-purple-glow glow-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-panel p-6 rounded-xl border-t-4 border-${edu.color} hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${edu.color}/10 blur-2xl rounded-full`}></div>
              
              <div className="text-5xl font-bold text-slate-200/50 absolute -bottom-2 -right-2 font-mono">
                {edu.year}
              </div>
              
              <span className="text-sm font-mono text-slate-500 mb-2 block">{edu.year}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
              <p className={`text-${edu.color} font-medium mb-4`}>{edu.specialization}</p>
              <p className="text-sm text-slate-600">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
