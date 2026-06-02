"use client";
import React from "react";
import { motion } from "framer-motion";
import { HERO_DATA } from "@/constants/portfolioData";


export default function Hero() {
    // Container animation configuration that controls children stagger timings
    const containerVariants = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    // Text Reveal line item configuration using smooth spring mechanics
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
        },
    },
}

return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 overflow-hidden bg-slate-950 text-slate-100 border-b border-slate-900">

        {/* BACKGROUND GRAPHIC: Ambient Kinetic Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full space-y-8 z-10 text-center lg:text-left"
      >
        {/* Core System Tracking Code */}
        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            {HERO_DATA.accent}
          </span>
        </motion.div>
      </motion.div>
    </section>
    )
}