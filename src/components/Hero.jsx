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

        {/* The Text Reveal Title Header */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 max-w-4xl"
        >
            {HERO_DATA.mainTitle}
        </motion.h1>

        {/* Subtitle Body Description */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-slate-400 font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0"
        >
          {HERO_DATA.subTitle}
        </motion.p>

        {/* Action Call Controls */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-slate-950 font-medium text-sm hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/5 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Systems Architecture ↓
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-800 hover:text-white transition-all duration-300 font-mono"
          >
            Initialize Connection()
          </a>
        </motion.div>

        {/* System Footprint Architecture Matrix Grid */}
        <motion.div 
          variants={itemVariants}
          className="pt-16 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl"
        >
          {HERO_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1 group">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors duration-200">
                {metric.value}
              </div>
            </div>
          ))}
        </motion.div>

        
      </motion.div>
    </section>
    )
}