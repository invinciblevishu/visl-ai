import { motion } from "motion/react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function EarlyAccess() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-text-secondary mb-8 uppercase tracking-widest"
        >
          <Mail size={14} />
          Contact
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4"
        >
          Request <br />
          <span className="text-text-secondary">Early Access.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary leading-relaxed mb-12"
        >
          We are currently onboarding a select group of enterprise partners.
          Join the waitlist to get access to our neurosymbolic engine.
        </motion.p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-surface border border-border flex flex-col items-center text-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-medium">Request Received</h3>
            <p className="text-text-secondary">
              Thank you for your interest. Our team will review your application
              and be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-text-secondary"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Jane Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-text-secondary"
              >
                Work Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="jane@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-text-secondary"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Acme Corp"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label
                htmlFor="usecase"
                className="text-sm font-medium text-text-secondary"
              >
                Intended Use Case
              </label>
              <textarea
                id="usecase"
                rows={3}
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                placeholder="Briefly describe how you plan to use Visl AI..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              Submit Request
              <ArrowRight size={18} />
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
