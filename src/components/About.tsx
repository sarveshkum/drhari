import { motion } from 'framer-motion';
import { Shield, Users, Target } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: <Shield className="text-neon-blue mb-4" size={32} />,
      title: '18+ Years Experience',
      description: 'Professional experience across cybersecurity, wireless networks, and enterprise IT operations.',
    },
    {
      icon: <Shield className="text-neon-blue mb-4" size={32} />,
      title: 'Leadership & Operations',
      description: 'Handled large-scale infrastructure, security operations, surveillance, access control, and operational continuity.',
    },
    {
      icon: <Target className="text-neon-blue mb-4" size={32} />,
      title: 'Cybersecurity Enthusiast',
      description: 'Passionate about practical security architectures, governance, risk reduction, and emerging cyber defense practices.',
    },
    {
      icon: <Users className="text-purple-glow mb-4" size={32} />,
      title: 'Founder & Advisor',
      description: 'Supports cybersecurity startups on product direction, technical execution, and market-aligned delivery.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 flex items-center gap-4">
            <span className="text-neon-blue font-mono text-xl sm:text-3xl">&lt;01/&gt;</span>
            System Architecture <span className="text-slate-400 font-mono text-lg">_ABOUT_ME</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Details Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel neon-border p-8 rounded-xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-3xl rounded-full pb-10"></div>

            {/* Profile Image */}
            <div className="w-full aspect-[4/3] sm:aspect-square rounded-lg mb-8 relative overflow-hidden border-2 border-slate-200 group-hover:border-neon-blue/50 transition-colors shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-purple-glow/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src="/profile-photo.jpg" 
                alt="Dr. Harihara Gopalan S professional profile photo" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/f8fafc/0f172a?text=Please+save+image+as\\npublic/profile-photo.jpg';
                }}
              />
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 font-mono text-sm">
              <span className="text-neon-blue">const</span> <span className="text-purple-glow">profile</span> = &lbrace;<br />
              &nbsp;&nbsp;name: <span className="text-emerald-500">"Dr. Harihara Gopalan S"</span>,<br />
              &nbsp;&nbsp;role: <span className="text-emerald-500">"Cybersecurity Professional & Operations Lead"</span>,<br />
              &nbsp;&nbsp;status: <span className="text-emerald-500">"Active"</span><br />
              &rbrace;;
            </p>
            <p className="text-slate-600 leading-relaxed">
              A professional cybersecurity enthusiast with over 18 years of experience in cybersecurity, wireless networks, IT infrastructure, and enterprise operations. With credentials including CCISO, CEH, and Certified Blockchain Associate, I focus on security operations, governance, risk-aware implementation, consulting, and innovation-led delivery for secure digital ecosystems.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-xl hover:bg-slate-200/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 border border-transparent hover:border-neon-blue/30"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
