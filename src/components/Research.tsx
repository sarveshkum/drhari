import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './Modal';

const publications = [
  { title: "An energy efficient routing protocol with fuzzy neural networks in wireless sensor network", journal: "Ain Shams Engineering Journal", year: "2024" },
  { title: "Enhancing IoT Security: A Blockchain-Based Mitigation Framework for Deauthentication Attacks", journal: "International Journal of Networked and Distributed Computing (Springer)", year: "2024" },
  { title: "Cognitive radio spectrum allocation using Nash equilibrium with multiple scheduling resource selection algorithm", journal: "Ain Shams Engineering Journal", year: "2024" },
  { title: "Fuzzified swarm intelligence framework using FPSOR algorithm for high-speed MANET- Internet of Things (IoT)", journal: "Measurement: Sensors", year: "2024" },
  { title: "Implementation of industrial security systems through the Internet of Things", journal: "AIP Conference Proceedings", year: "2023" },
  { title: "Data dissemination protocol for VANETs to optimize the routing path using hybrid particle swarm optimization", journal: "Telecommunication Systems", year: "2023" },
  { title: "ZHRP-DCSEI, a novel hybrid routing protocol for mobile ad-hoc networks to optimize energy using dynamic cuckoo search", journal: "Wireless Personal Communications", year: "2021" },
  { title: "Certain Investigation on IOT Based Smart Pill Carafe in Health Care", journal: "Journal of Physics: Conf.Series", year: "2021" },
  { title: "A Quantum-Based Blockchain Approach to Voting Protocol Using Hyperledger Sawtooth", journal: "Journal of Physics: Conf. Series", year: "2021" },
  { title: "Dynamic Clinical Trials Management in an unreliable Environment using Blockchain", journal: "Design Engineering", year: "2021" },
  { title: "A Novel Artificial Intelligence based Autonomous E- Cycle", journal: "Design Engineering", year: "2021" },
  { title: "The Efficient Data Security In Medical Health Report Using Block Chain Technology", journal: "Dogo Rangsang Research Journal", year: "2020" },
  { title: "Digital Forensics Using Blockchain", journal: "International Journal of Recent Technology and Engineering", year: "2019" },
  { title: "An Efficient License Plate Recognition System", journal: "International Journal of Scientific Research in Computer Science", year: "2019" },
  { title: "EMOTICON PROGNOSIS USING MACHINE LEARNING", journal: "International Journal of Advance Engineering and Research", year: "2018" },
  { title: "Hash Table-based Node Identification and M-Detection in MANETS", journal: "IJAEET", year: "2017" },
  { title: "Internet Data Traffic Analysis Using TRAP GL-VQ Algorithm", journal: "Internet Data Traffic Analysis", year: "2017" },
  { title: "Trust Based Fuzzy Aided ACO for Optimal Routing with Security in Manet", journal: "Asian Journal of Research in Social Sciences", year: "2016" },
  { title: "Improved Cuckoo Search Optimization Based Energy-Delay Aware Routing Algorithm in MANET", journal: "International Journal of Control Theory", year: "2016" },
  { title: "A Survey On Various Traffic Management Schemes For Traffic Clearance", journal: "IJETCSE", year: "2016" },
  { title: "RFID And GSM Based Smart Traffic Light Control System", journal: "Journal of Applied Sciences Research", year: "2015" },
  { title: "Probability Based Optimized Energy Efficient Routing Algorithm for Mobile AD-HOC Network", journal: "Middle-East Journal of Scientific Research", year: "2014" },
  { title: "Bio-Inspired Metaheuristic Algorithm for Network Intrusion Detection System of Architecture", journal: "IGI Global", year: "2024" },
  { title: "Deep Reinforcement Learning for Resource Allocation in Wireless Communication Systems", journal: "ICONSTEM / IEEE", year: "2024" }
];

export const Research = () => {
  const [selectedPub, setSelectedPub] = useState<typeof publications[0] | null>(null);

  return (
    <section id="research" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Research & <span className="text-purple-glow glow-text">Industry Insights</span>
            </h2>
            <p className="text-slate-600 font-mono text-sm max-w-2xl">
              Applied work across IoT security, blockchain, wireless networks, routing intelligence, and industrial cybersecurity. Explore publications and citations through Google Scholar.
            </p>
          </div>
          <a
            href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=DsMW6P0AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-purple-glow/10 border border-purple-glow text-purple-glow font-semibold rounded hover:bg-purple-glow/20 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all shrink-0"
          >
            <ExternalLink size={18} /> Google Scholar
          </a>
        </motion.div>

        <div className="glass-panel p-2 rounded-xl border border-slate-200 bg-slate-100/50">
          <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar space-y-2">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                onClick={() => setSelectedPub(pub)}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-black/5 rounded-lg hover:bg-black/10 border border-transparent hover:border-purple-glow/30 transition-all group cursor-pointer"
              >
                <div className="flex gap-4 items-start md:items-center">
                  <FileText className="text-purple-glow/50 group-hover:text-purple-glow shrink-0 mt-1 md:mt-0" size={20} />
                  <div>
                    <h3 className="text-slate-900 font-medium text-[15px] leading-snug group-hover:text-neon-blue transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">{pub.journal}</p>
                  </div>
                </div>
                <div className="mt-3 md:mt-0 text-right md:-ml-4 shrink-0">
                  <span className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full">
                    {pub.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedPub}
        onClose={() => setSelectedPub(null)}
        title="Research Publication"
      >
        {selectedPub && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 leading-tight">
              {selectedPub.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-purple-glow font-mono text-sm py-2">
              <span>{selectedPub.journal}</span>
              <span className="text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full">
                {selectedPub.year}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              Dr. Harihara Gopalan has contributed to applied cybersecurity, wireless networks, IoT security, and blockchain through work that connects technical depth with industry-oriented implementation and risk reduction.
            </p>
            <div className="flex gap-4 pt-4 mt-6 border-t border-slate-100">
              <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=DsMW6P0AAAAJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors font-medium text-sm">
                <ExternalLink size={18} /> Open Google Scholar
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
