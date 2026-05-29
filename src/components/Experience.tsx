import { motion } from 'framer-motion';
import { Briefcase, Network, Lightbulb, Users, Award, Shield } from 'lucide-react';

const experiences = [
  {
    role: "Head of IT & Security Operations",
    organization: "Sri Ramakrishna Engineering College",
    period: "Till 2025",
    description: "Handled enterprise-scale IT and security operations covering 1500+ systems, OFC backbone, core Layer 3 switching, 250+ access points, SOPHOS security, and centralized CCTV surveillance.",
    category: "Leadership",
    icon: <Network className="text-neon-blue" size={24} />
  },
  {
    role: "Cybersecurity Innovation Lead",
    organization: "Ministry of Education & SREC",
    period: "Over 5 Years",
    description: "Guided innovation programs for over 5 years, mentoring teams on problem solving, secure design thinking, prototype delivery, and stakeholder presentation.",
    category: "Leadership",
    icon: <Lightbulb className="text-matrix-green" size={24} />
  },
  {
    role: "Security Operations Builder",
    organization: "SREC Cyber Security Center",
    period: "Leadership",
    description: "Built cybersecurity, hardware security, and AR/VR capability centers to support applied security practice, hands-on training, and industry-aligned solutions.",
    category: "Leadership",
    icon: <Users className="text-purple-glow" size={24} />
  },
  {
    role: "Cybersecurity Practice Lead",
    organization: "Cyber Security Specialization",
    period: "Leadership",
    description: "Led a focused cybersecurity practice and developed nearly 10 modules aligned with workforce needs, applied delivery, and emerging threat areas.",
    category: "Leadership",
    icon: <Briefcase className="text-neon-blue" size={24} />
  },
  {
    role: "Research Fellowship Award 2025",
    organization: "Indian Academy of Sciences",
    period: "Jun–Jul 2025",
    description: "Selected for the Summer Research Fellowship Programme 2025, focused on Industrial IoT security and operational technology risk at CSIR-CMERI, Durgapur.",
    category: "Engagement",
    icon: <Award className="text-matrix-green" size={24} />
  },
  {
    role: "Cybersecurity Startup Founder",
    organization: "Zyphron Technologies Pvt. Ltd.",
    period: "Current",
    description: "Founder of a cybersecurity-focused enterprise incubated under NISP at SREC SPARK, Bengaluru, delivering industry-aligned products, advisory, and consulting services.",
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
            Leadership & <span className="text-neon-blue glow-text">Operations</span>
          </h2>
          <p className="text-slate-600 font-mono text-sm max-w-2xl mx-auto">
            Cybersecurity Leadership, Security Operations & Professional Engagements
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
                  <span className={`text-xs font-mono px-3 py-1 rounded-full mb-4 inline-block ${exp.category === 'Leadership' ? 'text-neon-blue bg-neon-blue/10' : 'text-purple-glow bg-purple-glow/10'}`}>
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
