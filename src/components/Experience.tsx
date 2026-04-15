import { motion } from 'framer-motion';
import { Briefcase, Network, Lightbulb, Users, Award, Shield } from 'lucide-react';

const experiences = [
  {
    role: "Head of IT & Network Operations",
    organization: "Sri Ramakrishna Engineering College",
    period: "Till 2025",
    description: "Manages over 1500 computers, an OFC Backbone with Core Layer 3 Switching, 250+ Access Points from CISCO, SOPHOS, and Centralized CCTV Surveillance.",
    category: "Administrative",
    icon: <Network className="text-neon-blue" size={24} />
  },
  {
    role: "Smart India Hackathon Coordinator",
    organization: "Ministry of Education & SREC",
    period: "Over 5 Years",
    description: "Coordinates the institution's participation for over 5 years. Mentored students generating innovative solutions.",
    category: "Administrative",
    icon: <Lightbulb className="text-matrix-green" size={24} />
  },
  {
    role: "Research Labs Setup",
    organization: "SREC Cyber Security Center",
    period: "Administrative",
    description: "Established research labs in Cyber Security, including Hardware Security, and AR/VR Lab.",
    category: "Administrative",
    icon: <Users className="text-purple-glow" size={24} />
  },
  {
    role: "Network Research Group Leader",
    organization: "Cyber Security Specialization",
    period: "Administrative",
    description: "Heads the Network Research Group and has developed nearly 10 courses for Cyber Security Specialization.",
    category: "Administrative",
    icon: <Briefcase className="text-neon-blue" size={24} />
  },
  {
    role: "Research Fellowship Award 2025",
    organization: "Indian Academy of Sciences",
    period: "Jun–Jul 2025",
    description: "Selected for the prestigious Summer Research Fellowship Programme (SFRP) 2025, focused on Industrial IoT Security at CSIR-CMERI, Durgapur.",
    category: "Engagement",
    icon: <Award className="text-matrix-green" size={24} />
  },
  {
    role: "Cybersecurity Startup Founder",
    organization: "Zyphron Technologies Pvt. Ltd.",
    period: "Current",
    description: "Founder of a cybersecurity-focused enterprise incubated under NISP at SREC SPARK, Bengaluru. Delivers industry-aligned solutions and consultancy.",
    category: "Engagement",
    icon: <Shield className="text-purple-glow" size={24} />
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-100/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Leadership & <span className="text-neon-blue glow-text">Engagements</span>
          </h2>
          <p className="text-slate-600 font-mono text-sm max-w-2xl mx-auto">
            Administrative Responsibilities & Professional Engagements
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-purple-glow to-transparent transform -translate-x-1/2 opacity-30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center justify-between mb-16 w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Icon Node */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass-panel border-2 border-neon-blue flex items-center justify-center z-10 bg-slate-50">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="w-full pl-16 md:pl-0 md:w-5/12">
                <div className="glass-panel neon-border p-6 rounded-xl hover:bg-black/5 transition-all">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full mb-4 inline-block ${exp.category === 'Administrative' ? 'text-neon-blue bg-neon-blue/10' : 'text-purple-glow bg-purple-glow/10'}`}>
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                  <h4 className="text-lg text-slate-700 font-semibold mb-4">{exp.organization}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
