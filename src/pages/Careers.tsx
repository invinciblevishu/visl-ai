import { motion } from "motion/react";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function Careers() {
  const roles = [
    {
      title: "Founding Engineer (AI)",
      type: "Full-time",
      location: "Gurugram, India / Remote",
      desc: "Architect and scale our core neurosymbolic engine. You will be responsible for bridging our research models into production-ready infrastructure.",
      reqs: ["Python/TypeScript", "PyTorch/JAX", "Distributed Systems"],
    },
    {
      title: "Founding Engineer (Full-Stack)",
      type: "Full-time",
      location: "Gurugram, India / Remote",
      desc: "Build the interface for the next generation of AI tooling. You will design and implement the workflow-native platform that our enterprise partners rely on.",
      reqs: ["React/TypeScript", "Node.js/Go", "WebGL/Canvas"],
    },
    {
      title: "AI Researcher (Intern)",
      type: "Internship",
      location: "Gurugram, India",
      desc: "Work directly with our leadership on novel architectures for long-form generation. Push the boundaries of what's possible with agentic workflows.",
      reqs: [
        "AI Agents (LangGraph/RAG)",
        "Python",
        "Deep Learning Fundamentals",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-text-secondary mb-8 uppercase tracking-widest"
        >
          <Terminal size={14} />
          Hiring
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6"
        >
          Join the <br />
          <span className="text-text-secondary">0-to-1 Journey.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed"
        >
          We are a small, elite team of researchers and engineers building the
          foundational infrastructure for the next era of generative AI. We
          value high agency, deep technical expertise, and a bias for action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl bg-surface border border-border inline-block"
        >
          <p className="text-white font-medium mb-2">Top-Tier Compensation & Shared Ownership</p>
          <p className="text-text-secondary leading-relaxed">
            We offer highly competitive salaries that rival top tech companies. More importantly, we grant meaningful equity to every single team member—including our interns. When we win, everyone wins.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6">
        {roles.map((role, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block p-8 rounded-2xl bg-surface border border-border hover:bg-surface-hover transition-colors cursor-pointer relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {role.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary font-mono uppercase tracking-widest mb-6">
                  <span>{role.type}</span>
                  <span>•</span>
                  <span>{role.location}</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
                  {role.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.reqs.map((req, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-text-secondary"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-2xl border border-border bg-background text-center"
      >
        <p className="text-text-secondary mb-4">
          Don't see a perfect fit? We're always looking for exceptional talent.
        </p>
        <a
          href="mailto:careers@visl.ai"
          className="text-white hover:underline underline-offset-4 transition-all"
        >
          careers@visl.ai
        </a>
      </motion.div>
    </div>
  );
}
