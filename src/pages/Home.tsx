import { motion } from "motion/react";
import { ArrowRight, Cpu, Layers, ShieldCheck, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";

function VideoGenerationPlaceholder() {
  return (
    <div className="relative w-full aspect-video bg-[#050505] rounded-2xl overflow-hidden border border-border mt-16 group">
      {/* Abstract Video Background / Latent Space */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: ["0%", "10%", "0%"],
            y: ["0%", "-10%", "0%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: ["0%", "-10%", "0%"],
            y: ["0%", "10%", "0%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[20%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10"
      />

      {/* Center Play/Generation Indicator */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md"
        >
          <Play className="w-6 h-6 text-white/70 ml-1" />
        </motion.div>
      </div>

      {/* Prompt Input Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-20">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-text-secondary" />
          <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">
            Prompt
          </span>
        </div>

        <div className="relative h-6 flex items-center">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
              ease: "linear",
            }}
            className="inline-block text-sm md:text-base text-white font-medium whitespace-nowrap"
          >
            A cinematic tracking shot through a neon-lit city...
          </motion.div>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-4 bg-white/80 ml-1 align-middle"
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-text-secondary mb-8 uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Stealth Mode
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 max-w-4xl"
        >
          From Prompt to <br className="hidden md:block" />
          <span className="text-text-secondary">Production-Ready.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10"
        >
          We are building the foundational infrastructure for long-form video
          generation. Moving beyond the demo, delivering reliability at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/early-access"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Request Early Access
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <VideoGenerationPlaceholder />
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="w-full bg-surface border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Workflow-Native.
            </h2>
            <p className="text-text-secondary max-w-xl text-lg">
              Designed for enterprise pipelines, our architecture integrates
              seamlessly into existing production workflows without compromising
              on fidelity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers size={24} />,
                title: "Neurosymbolic Core",
                desc: "Bridging neural networks with symbolic logic for deterministic control over generative outputs.",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Reliability at Scale",
                desc: "Built for production environments where consistency and uptime are non-negotiable.",
              },
              {
                icon: <Cpu size={24} />,
                title: "Compute Optimized",
                desc: "Proprietary inference engine reducing latency and cost for long-form generation.",
              },
            ].map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-medium">{prop.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {prop.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
