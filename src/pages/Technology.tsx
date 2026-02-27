import { motion } from "motion/react";
import { Network, Database, Zap } from "lucide-react";

function ArchitectureAnimation() {
  return (
    <div className="w-full h-96 bg-surface rounded-2xl border border-border relative overflow-hidden flex items-center justify-center p-8">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="flex items-center justify-between w-full max-w-3xl z-10">
        {/* Neural Networks Node */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 rounded-full border border-border bg-background flex items-center justify-center relative">
            <Network className="text-text-secondary" size={32} />
            <motion.div
              className="absolute inset-0 rounded-full border border-white/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-sm font-mono text-text-secondary tracking-widest uppercase">
            Neural
          </span>
        </motion.div>

        {/* The Bridge */}
        <div className="flex-1 px-8 relative h-px bg-border">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-px bg-white"
            style={{ originX: 0 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-4 py-2 rounded-full border border-border text-xs font-mono text-white tracking-widest uppercase">
            Bridge
          </div>
        </div>

        {/* Symbolic Logic Node */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 rounded-lg border border-border bg-background flex items-center justify-center relative transform rotate-45">
            <Database className="text-text-secondary -rotate-45" size={32} />
            <motion.div
              className="absolute inset-0 rounded-lg border border-white/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
          <span className="text-sm font-mono text-text-secondary tracking-widest uppercase mt-2">
            Symbolic
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-3xl mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6"
        >
          Neurosymbolic <br />
          <span className="text-text-secondary">Architecture.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed"
        >
          We are pioneering a hybrid approach to generative AI. By combining the
          pattern recognition capabilities of deep learning with the
          deterministic reasoning of symbolic logic, we achieve unprecedented
          control over long-form generation.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-24"
      >
        <ArchitectureAnimation />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
            <Zap size={20} className="text-white" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight">
            Deterministic Control
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Traditional LLMs and diffusion models suffer from hallucination and
            drift over long sequences. Our symbolic engine enforces logical
            constraints, ensuring narrative consistency and physical accuracy
            across extended generation windows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
            <Network size={20} className="text-white" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight">
            Latent Space Navigation
          </h3>
          <p className="text-text-secondary leading-relaxed">
            We map symbolic rules directly into the latent space of our neural
            models. This allows for real-time steering of the generation process
            without requiring expensive re-computation or prompt engineering
            hacks.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
