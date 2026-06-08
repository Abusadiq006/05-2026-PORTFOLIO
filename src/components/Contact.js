"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE"); // IDLE, PENDING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("PENDING")

    try {
      // Form handling using Next.js route or Server Action link
      // Example placeholder logic until API endpoint is live
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("ERROR");
    }
  }

return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 px-4 sm:px-8 lg:px-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT COLUMN: SYSTEM TELEMETRY / CALL TO ACTION */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-500">05 // SECURE GATEWAY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Initialize Connection()</h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an architecture that needs engineering, a legacy system that needs refactoring, or a full-stack platform waiting to be brought to life? Drop a packet below.
          </p>
          
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-900 font-mono text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Response SLA: &lt; 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>Encryption Status: TLS 1.3 / End-to-End</span>
            </div>
          </div>

          {/* Social Network Access Nodes */}
          <div className="pt-4 flex items-center gap-4 font-mono text-xs">
            <a href="https://github.com/Abusadiq006" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              [ GitHub ]
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              [ LinkedIn ]
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE CONNECTION TERMINAL */}
      </div>
      </section>
)
