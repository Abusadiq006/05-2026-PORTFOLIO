"use inline" // Ensure this is a Client Component if using Next.js App Router

import { useActionState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sendContactEmail, ActionState } from "./contact"

const initialState: ActionState = {
  success: false,
  message: "",
}

export default function ContactForm() {
  // useActionState handles the form submission state, pending state, and return data seamlessly
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)

  // Framer Motion variants for smooth staggering and entry animations
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-6"
      >
        Get in Touch
      </motion.h2>

      <form action={formAction} className="space-y-5">
        {/* Name Field */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            disabled={isPending}
            className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors disabled:opacity-50"
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            disabled={isPending}
            className={`w-full px-4 py-3 rounded-lg bg-neutral-900/50 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors disabled:opacity-50 ${
              state.errors?.email ? 'border-red-500/60 focus:ring-red-500/30' : 'border-neutral-700'
            }`}
            placeholder="you@example.com"
          />
          <AnimatePresence mode="wait">
            {state.errors?.email && (
              <motion.p 
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xs text-red-400 font-medium"
              >
                {state.errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Field */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            disabled={isPending}
            className={`w-full px-4 py-3 rounded-lg bg-neutral-900/50 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none disabled:opacity-50 ${
              state.errors?.message ? 'border-red-500/60 focus:ring-red-500/30' : 'border-neutral-700'
            }`}
            placeholder="Tell me about your project..."
          />
          <AnimatePresence mode="wait">
            {state.errors?.message && (
              <motion.p 
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xs text-red-400 font-medium"
              >
                {state.errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: isPending ? 1 : 1.02 }}
          whileTap={{ scale: isPending ? 1 : 0.98 }}
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-6 rounded-lg bg-white text-neutral-950 font-semibold shadow-md hover:bg-neutral-100 transition-colors disabled:bg-neutral-700 disabled:text-neutral-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isPending ? (
            <>
              <svg className="animate-spin h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </motion.button>

        {/* Global Submission Feedback */}
        <AnimatePresence mode="wait">
          {state.message && !state.errors && (
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`p-4 rounded-lg text-sm font-medium text-center border ${
                state.success 
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              {state.message}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}