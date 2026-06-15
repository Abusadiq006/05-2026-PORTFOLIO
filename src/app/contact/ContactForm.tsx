"use client";

import React, { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, Send } from "lucide-react";
import { sendContactEmail, ActionState } from "./contact";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  // useActionState handles pending states and errors automatically from your contact.ts
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  // Animation configuration for validation message entries
  const errorVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -5, transition: { duration: 0.15 } }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 px-4 sm:px-8 lg:px-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-500">03 // Secure Gateway</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Let&apos;s Build Something Useful</h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a product that needs engineering, a workflow that needs cleanup, or a full-stack platform waiting to be brought to life? Send the details and I&apos;ll reply quickly.
          </p>

          <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-900 font-mono text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Response SLA: under 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>Project fit: dashboards, APIs, integrations</span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4 font-mono text-xs">
            <a href="https://github.com/Abusadiq006" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              [ GitHub ]
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              [ LinkedIn ]
            </a>
          </div>
        </div>

        {/* Right Side: Animated Form Card */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/30 border border-slate-800/80 rounded-lg p-6 sm:p-8 backdrop-blur-md relative"
          >
            {/* The action prop links directly to your Server Action */}
            <form action={formAction} className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  disabled={isPending}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 font-sans disabled:opacity-50"
                  placeholder="e.g., John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  disabled={isPending}
                  className={`w-full bg-slate-950/60 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 font-mono disabled:opacity-50 ${
                    state.errors?.email ? "border-rose-500/50 focus:ring-rose-500/20" : "border-slate-800"
                  }`}
                  placeholder="client@company.com"
                />
                <AnimatePresence mode="wait">
                  {state.errors?.email && (
                    <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-xs text-rose-400 font-mono pl-1">
                      * {state.errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  disabled={isPending}
                  className={`w-full bg-slate-950/60 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 leading-relaxed resize-none disabled:opacity-50 ${
                    state.errors?.message ? "border-rose-500/50 focus:ring-rose-500/20" : "border-slate-800"
                  }`}
                  placeholder="Tell me about the project, timeline, and goals..."
                />
                <AnimatePresence mode="wait">
                  {state.errors?.message && (
                    <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-xs text-rose-400 font-mono pl-1">
                      * {state.errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-white text-slate-950 font-medium text-sm py-3 px-4 rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-md transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none font-mono"
              >
                {isPending ? "Sending..." : <>Send Message <Send size={15} aria-hidden="true" /></>}
              </button>

              {/* Global Success / Failure Banners */}
              <AnimatePresence mode="wait">
                {state.message && !state.errors && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`mt-4 p-3 rounded-lg border font-mono text-xs flex items-center gap-2 ${
                      state.success
                        ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400"
                        : "bg-rose-950/30 border-rose-500/30 text-rose-400"
                    }`}
                  >
                    {state.success ? (
                      <>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        {state.message}
                      </>
                    ) : (
                      <>
                        <AlertTriangle size={15} aria-hidden="true" />
                        {state.message}
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}