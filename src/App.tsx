import MatrixRain from './components/MatrixRain';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { GlobalExposure } from './components/GlobalExposure';
import { Mentorship } from './components/Mentorship';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans relative">
      <MatrixRain />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Research />
        <GlobalExposure />
        <Mentorship />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
