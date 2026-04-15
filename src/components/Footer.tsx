import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              <span className="text-neon-blue">&gt;</span>DR. HARIHARA GOPALAN S
            </span>
            <span className="animate-pulse w-2 h-5 bg-neon-blue inline-block"></span>
          </div>

          <p className="text-slate-600 text-sm text-center md:text-left">
            "Securing the Future with Intelligence & Innovation."
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-600 hover:text-neon-blue hover:border-neon-blue/50 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Harihara Gopalan S. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 cursor-default hover:text-neon-blue/70 transition-colors">
            SYSTEM_STATUS: ONLINE_AND_SECURE
          </p>
        </div>
      </div>
    </footer>
  );
};
