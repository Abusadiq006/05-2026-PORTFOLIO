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
          ></motion.div>
            </div>
        </section>
    )
}