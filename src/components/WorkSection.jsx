"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/portfolioData";

export default function WorkSection() {
    return (
        <section className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4 sm:px-8 lg:px-16 border-t border-slate-900">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
                {/* LEFT SIDE: STICKY DEVELOPER PROFILE CARD */}
                <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden group"
                        transition={{ duration: 0.6, ease: "easeOut" }}
            >   <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-5 transition duration-700 blur" />    

                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 mb-6">
                    <div className="w-full h-full bg-slate-950 flex items-center justify-center font-mono text-slate-500">
                        [ Profile Image Area ]
                    </div>
                    <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 rounded-full flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs uppercase tracking-wider font-mono text-emerald-400">System: Active</span>
                    </div>
                </div>
            
                <h3 className="text-2xl font-bold tracking-tight text-white">Abusadiq</h3>
                <p className="text-sm font-mono text-cyan-400 mt-1">Full-Stack Software Engineer</p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    Specialized in engineering modern web applications, high-performance API architectures, and bulletproof database integration structures.
                </p>

                <div className="pt-6 border-t border-slate-800/80 mt-6 flex gap-4 text-xs font-mono text-slate-400">
                    <div><span className="text-white font-bold">5+</span> Systems Live</div>
                    <div><span className="text-white font-bold">99.9%</span> API Uptime</div>
                </div>
            </motion.div>
            </div>
        </section>
    )
}