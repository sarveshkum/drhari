import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/urshari@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Portfolio Contact from ${name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Initialize <span className="text-neon-blue glow-text">Connection</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Secure the Future</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Open to keynote speaking, startup mentoring, cybersecurity consultation, and research collaborations. Enter the secure channel to get in touch.
            </p>

            <div className="space-y-6">
              <a href="mailto:urshari@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-neon-blue/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">SECURE_MAIL</p>
                  <p className="font-semibold">urshari@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/harisuryanarayanan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border-slate-200 group-hover:border-neon-blue/50 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">PROFESSIONAL_NETWORK</p>
                  <p className="font-semibold">linkedin.com/in/harisuryanarayanan</p>
                </div>
              </a>


            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/harisuryanarayanan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-neon-blue/20 hover:text-slate-900 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/urshari" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-neon-blue/20 hover:text-slate-900 transition-all">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-xl neon-border relative"
            onSubmit={handleSubmit}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-slate-600 mb-2">IDENTIFICATION</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-100/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-neon-blue/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-slate-600 mb-2">RETURN_ADDRESS</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-100/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-neon-blue/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-slate-600 mb-2">PAYLOAD</label>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-100/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-neon-blue/10 border border-neon-blue text-slate-900 font-semibold rounded-lg hover:bg-neon-blue/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'TRANSMITTING...' : 'TRANSMIT SECURE DATA'}
                {!status && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                {status !== 'loading' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-mono text-sm"
                >
                  TRANSMISSION SUCCESSFUL. MESSAGE RECEIVED.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-mono text-sm"
                >
                  TRANSMISSION FAILED. PLEASE TRY AGAIN LATER.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
