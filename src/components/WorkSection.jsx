"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, ShieldCheck } from "lucide-react";
import { PROJECTS } from "@/constants/portfolioData";

export default function WorkSection() {
  return (
    <section id="projects" className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4 sm:px-8 lg:px-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Sticky Bio Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-slate-900/40 border border-slate-800 rounded-lg p-6 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-5 transition duration-700 blur" />

            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-slate-800 border border-slate-700/50 mb-6">
              {/* NEW: Your actual profile picture replacing the gradient background */}
              <Image
                src="/abusadiq.jpg" // Make sure your photo is saved in your public folder with this exact name!
                alt="Abusadiq - Full Stack Engineer"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            
              {/* Keep your sleek System: Active badge floating right on top of the photo */}
              <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 rounded-full flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-wider font-mono text-emerald-400">System: Active</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white">Abusadiq</h3>
            <p className="text-sm font-mono text-cyan-400 mt-1">Full-Stack Software Engineer</p>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              I design and ship modern web applications with dependable API layers, practical data models, and interfaces that make complex workflows feel simple.
            </p>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex gap-4 text-xs font-mono text-slate-400">
              <div><span className="text-white font-bold">5+</span> Systems Live</div>
              <div><span className="text-white font-bold">99.9%</span> API Uptime</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Production Applications List */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-2 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-500">02 // Selected Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Production-Minded Applications</h2>
          </div>

          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-slate-900/20 border border-slate-800/60 rounded-lg overflow-hidden hover:border-slate-700/80 transition-all duration-300 flex flex-col md:flex-row group shadow-xl"
            >
              {/* Cover Art Frame */}
              <div className="md:w-2/5 relative bg-slate-950 overflow-hidden min-h-[220px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-3 left-3 z-20 bg-slate-900/90 border border-indigo-500/30 font-mono text-[10px] text-indigo-300 px-2.5 py-1 rounded flex items-center gap-1.5">
                  <ShieldCheck size={12} aria-hidden="true" /> {project.testing}
                </div>
              </div>

              {/* Data and Details Card */}
              <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors duration-200">{project.title}</h3>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{project.description}</p>

                  {/* Built-with Matrix Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.frontend.map((tech) => (
                      <span key={tech} className="bg-slate-800/50 text-slate-300 px-2.5 py-0.5 rounded-md text-xs border border-slate-700/30 font-mono">{tech}</span>
                    ))}
                    {project.backend.map((tech) => (
                      <span key={tech} className="bg-slate-950 text-cyan-400/90 px-2.5 py-0.5 rounded-md text-xs border border-cyan-950 font-mono">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* External Routing Anchors */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white text-slate-950 font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-md transform active:scale-95 flex items-center justify-center gap-2"
                  >
                    Live Site <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-slate-800 text-slate-200 font-medium text-sm py-2.5 px-4 rounded-lg border border-slate-700 hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Source <GitBranch size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}