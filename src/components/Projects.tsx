import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Settings, Zap, Map } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './Modal';

const projects = [
  {
    title: "Smart Electric Cycle with PAS and ADAS",
    domain: "Domain: AI with IoT and Mobile Application",
    description: "Patent (Published): Features pedal assisting modes, smart summon, self-driving, and remote control, managed through an application or manual switch.",
    tags: ["Patent", "AI", "IoT", "React Native"],
    icon: <Zap size={24} className="text-matrix-green" />
  },
  {
    title: "Plug and Play System Security Audit Tool",
    domain: "Domain: Cyber Security",
    description: "An agent-based security audit tool for Windows and Linux with a centralized dashboard. Developed during the Kavach Hackathon at Centurion University.",
    tags: ["Security", "Linux", "Windows", "Audit"],
    icon: <Settings size={24} className="text-neon-blue" />
  },
  {
    title: "Prognosis of Forest Encroachment (Evergreen Watchdog)",
    domain: "Domain: AI with Image Processing",
    description: "A real-time forest monitoring system integrating satellite technology, image processing, web technology, and data sharing.",
    tags: ["Image Processing", "Satellite Tech", "AI"],
    icon: <Map size={24} className="text-purple-glow" />
  },
  {
    title: "Prevention of Forest Encroachment",
    domain: "Domain: AI & IoT",
    description: "Developed as a student project for the Assam Forest Department during the Smart India Hackathon 2019 to detect and prevent encroachment.",
    tags: ["IoT", "AI", "Smart India Hackathon"],
    icon: <Cpu size={24} className="text-neon-blue" />
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Patents & <span className="text-neon-blue glow-text">Projects</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel neon-border p-8 rounded-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-neon-blue/10 transition-colors"></div>

              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-3 glass-panel rounded-lg mr-4">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/urshari" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-neon-blue transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-slate-600 hover:text-neon-blue transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-neon-blue transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-purple-glow tracking-wider mb-4">
                  {project.domain}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow min-h-[80px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono text-slate-700 bg-black/5 border border-slate-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-purple-glow font-mono text-sm">
              <span>{selectedProject.domain}</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {selectedProject.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-mono text-slate-700 bg-slate-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4 mt-6">
              <a href="https://github.com/urshari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors font-medium text-sm">
                <Github size={18} /> View Source
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors font-medium text-sm">
                <ExternalLink size={18} /> Live Project
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
