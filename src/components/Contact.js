"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Send } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("PENDING");

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      const result = await sendContactEmail({ success: false, message: "" }, payload);

      if (result.success) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 px-4 sm:px-8 lg:px-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/30 border border-slate-800/80 rounded-lg p-6 sm:p-8 backdrop-blur-md relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 font-sans"
                  placeholder="e.g., John Doe"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 font-mono"
                  placeholder="client@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 leading-relaxed resize-none"
                  placeholder="Tell me about the project, timeline, and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "PENDING"}
                className="w-full bg-white text-slate-950 font-medium text-sm py-3 px-4 rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-md transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none font-mono"
              >
                {status === "PENDING" ? "Sending..." : <>Send Message <Send size={15} aria-hidden="true" /></>}
              </button>

              {status === "SUCCESS" && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 font-mono text-xs text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 size={15} aria-hidden="true" /> Message sent successfully.
                </div>
              )}
              {status === "ERROR" && (
                <div className="mt-4 p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 font-mono text-xs text-rose-400 flex items-center gap-2">
                  <AlertTriangle size={15} aria-hidden="true" /> Message failed. Check your email setup and try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
