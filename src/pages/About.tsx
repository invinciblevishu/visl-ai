import { motion } from "motion/react";
import { Users, BookOpen, Award, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-text-secondary mb-8 uppercase tracking-widest"
        >
          <Users size={14} />
          The Team
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6"
        >
          Built by <br />
          <span className="text-text-secondary">Researchers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed"
        >
          Visl AI was founded on the belief that the next generation of
          generative AI requires a fundamental shift in architecture. We are a
          team of researchers and engineers dedicated to solving the hardest
          problems in long-form generation.
        </motion.p>
      </div>

      <div className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-surface border border-border max-w-4xl"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl bg-background border border-border overflow-hidden">
            {/* Using a high-quality placeholder image since LinkedIn blocks direct image scraping. Replace with the actual image URL if needed. */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
              alt="Varun Aggarwal" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-2xl font-medium tracking-tight">
                Varun Aggarwal
              </h3>
              <a 
                href="https://www.linkedin.com/in/varunaggarwal2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-4">
              Founder & CEO
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Former AI researcher and serial entrepreneur. Previously founded
              an AI infrastructure company that achieved a $100M+ exit. His
              research in neurosymbolic systems and generative models has
              garnered over 1,500 citations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-text-secondary bg-background px-3 py-1.5 rounded-full border border-border">
                <BookOpen size={14} />
                <span>1500+ Citations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary bg-background px-3 py-1.5 rounded-full border border-border">
                <Award size={14} />
                <span>$100M+ Exit</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-12 rounded-3xl bg-surface border border-border text-center flex flex-col items-center"
      >
        <h2 className="text-3xl font-medium tracking-tight mb-4">
          Independent by Design.
        </h2>
        <p className="text-text-secondary max-w-2xl text-lg mb-8">
          Visl AI is entirely seeded by our founder, Varun Aggarwal. With zero external capital, we answer only to our mission and our enterprise partners. This independence allows us to focus entirely on fundamental research and long-term breakthroughs rather than short-term venture cycles.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-white">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          100% Founder Seeded
        </div>
      </motion.div>
    </div>
  );
}
