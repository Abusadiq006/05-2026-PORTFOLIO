"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // replace YOUR_ACCESS_KEY_HERE with your key later
          access_key: "YOUR_ACCESS_KEY_HERE", 
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormState({ name: "", email: "", message: "" }); // Clear form
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 font-mono text-sm">
      <div>
        <label className="block text-slate-400 mb-1.5 uppercase tracking-wider text-xs">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-slate-400 mb-1.5 uppercase tracking-wider text-xs">Email Address</label>
        <input
          type="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-slate-400 mb-1.5 uppercase tracking-wider text-xs">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          placeholder="Describe your system requirements or project scope..."
        />
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className="w-full bg-white text-slate-950 font-medium py-3 rounded-lg hover:bg-cyan-400 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none text-base"
      >
        {status.loading ? "Routing Packet..." : "Dispatch Message"}
        <Send size={16} />
      </button>

      {/* Success Notification */}
      {status.success && (
        <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-4 rounded-lg flex items-start gap-3">
          <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
          <div>
            <p className="font-bold">Message Delivered.</p>
            <p className="text-xs text-emerald-400/80 mt-0.5">The secure email pipeline executed successfully. I will review your inquiry shortly.</p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status.error && (
        <div className="bg-rose-950/40 border border-rose-500/30 text-rose-400 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="shrink-0 mt-0.5" size={18} />
          <div>
            <p className="font-bold">Transmission Interrupted.</p>
            <p className="text-xs text-rose-400/80 mt-0.5">{status.error}</p>
          </div>
        </div>
      )}
    </form>
  );
}