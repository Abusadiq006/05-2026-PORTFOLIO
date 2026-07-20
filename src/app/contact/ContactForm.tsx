"use client";

import React, { useActionState, useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactEmail, type ActionState } from "./contact";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const [formKey, setFormKey] = useState(0);

  React.useEffect(() => {
    if (state.success) {
      setFormKey((key) => key + 1);
    }
  }, [state.success]);

  return (
    <form key={formKey} action={formAction} className="space-y-5 font-mono text-sm">
      <div>
        <label className="block text-slate-400 mb-1.5 uppercase tracking-wider text-xs">Name</label>
        <input
          type="text"
          name="name"
          required
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
          aria-describedby={state.errors?.email ? "email-error" : undefined}
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
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          placeholder="Describe your system requirements or project scope..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-white text-slate-950 font-medium py-3 rounded-lg hover:bg-cyan-400 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none text-base"
      >
        {isPending ? "Routing Packet..." : "Dispatch Message"}
        <Send size={16} />
      </button>

      {/* Success Notification */}
      {state.success && (
        <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-4 rounded-lg flex items-start gap-3">
          <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
          <div>
            <p className="font-bold">Message Delivered.</p>
            <p className="text-xs text-emerald-400/80 mt-0.5">The secure email pipeline executed successfully. I will review your inquiry shortly.</p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {!state.success && state.message && (
        <div className="bg-rose-950/40 border border-rose-500/30 text-rose-400 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="shrink-0 mt-0.5" size={18} />
          <div>
            <p className="font-bold">Transmission Interrupted.</p>
            <p className="text-xs text-rose-400/80 mt-0.5">{state.message}</p>
          </div>
        </div>
      )}

      {state.errors?.email && <p id="email-error" className="text-xs text-rose-400">{state.errors.email}</p>}
      {state.errors?.message && <p id="message-error" className="text-xs text-rose-400">{state.errors.message}</p>}
    </form>
  );
}
