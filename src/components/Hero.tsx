import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronRight } from 'lucide-react';

const profileBadges = [
  { image: '/badges/facebook.svg', title: 'Facebook', href: 'https://www.facebook.com/harisuryanarayanan' },
  { image: '/badges/linkedin.svg', title: 'LinkedIn', href: 'https://www.linkedin.com/in/harisuryanarayanan/' },
  { image: '/badges/orcid.svg', title: 'ORCID', href: 'https://orcid.org/0000-0003-0830-9742' },
  { image: '/badges/web-of-science.svg', title: 'Web of Science', href: 'https://www.webofscience.com/wos/author/record/AAJ-9817-2021' },
  { image: '/badges/scopus.svg', title: 'Scopus', href: 'https://www.scopus.com/authid/detail.uri?authorId=57194520134' },
  { image: '/badges/sciprofiles.svg', title: 'SciProfiles', href: 'https://sciprofiles.com/profile/1579844' },
  { image: '/badges/google-scholar.svg', title: 'Google Scholar', href: 'https://scholar.google.com/citations?user=DsMW6P0AAAAJ&hl=en' },
];

const certificationBadges = [
  {
    title: 'Certified Ethical Hacker',
    href: 'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=8pn0vFdle07YbNJY0FAjNfK0UV98ncfHwyzLA8jZTDY=',
    image: '/badges/ceh-badge.png',
  },
  {
    title: 'Certified Chief Information Security Officer',
    href: 'https://www.linkedin.com/in/harisuryanarayanan/details/certifications/',
    image: '/badges/cciso.svg',
    wide: true,
  },
  {
    title: 'Cybersecurity Career Mentor',
    href: 'https://aspen.eccouncil.org/VerifyBadge?type=mentor&a=8pn0vFdle07YbNJY0FAjNfK0UV98ncfHwyzLA8jZTDY=',
    image: '/badges/career-mentor-badge.png',
  },
];

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
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="flex flex-wrap items-center gap-2">
              {profileBadges.map((badge) => (
                <a
                  key={badge.title}
                  href={badge.href}
                  title={badge.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-8 w-8 rounded-md shadow-sm hover:-translate-y-1 transition-transform"
                >
                  <img src={badge.image} alt={badge.title} className="h-full w-full object-contain" />
                </a>
              ))}
            </div>
            {certificationBadges.map((badge) => (
              <a
                key={badge.title}
                href={badge.href}
                title={badge.title}
                target="_blank"
                rel="noopener noreferrer"
                className={`block h-20 ${badge.wide ? 'w-40 sm:w-48' : 'w-20 sm:w-24'} sm:h-24 rounded-lg shadow-md hover:-translate-y-1 transition-transform`}
              >
                <img src={badge.image} alt={badge.title} className="h-full w-full object-contain" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-black h-[80px] md:h-auto"
          >
            <span className="mr-3 text-black">&gt;</span>
            <TypeAnimation
              sequence={[
                'Cyber Security Consultant',
                2000,
                'Senior Manager',
                2000,
                'Security Operations Consultant',
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
            18+ years across cybersecurity, network operations, digital infrastructure, and enterprise security initiatives with a hands-on passion for resilient, business-ready technology.
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
              View Portfolio
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
