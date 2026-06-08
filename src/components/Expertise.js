"use client"
import React from "react"
import { motion } from "framer-motion"

const PRINCIPLES = [
  { title: "Data Integrity & Security", desc: "Enforcing bulletproof relational schemas, strict authentication guards, and secure payment webhook verification chains." },
  { title: "Performance-First Architecture", desc: "Optimizing Core Web Vitals using Next.js Server Components, strict route caching, and ultra-fast asset delivery." },
  { title: "Test-Driven Resiliency", desc: "Validating API endpoints via structured testing environments like Postman and Insomnia to maintain flawless uptimes." }
]

const SKILL_CATEGORIES = [
  {
    title: "Backend Core & Routing",
    skills: ["Node.js", "Express.js", "Next.js APIs", "RESTful Systems", "Middleware Architecture"]
  },
  {
    title: "Frontend Engineering & Systems",
    skills: ["React", "Next.js App Router", "Tailwind CSS", "Framer Motion", "Responsive Ecosystems"]
  },
  {
    title: "Persistence & Cloud Infra",
    skills: ["Supabase", "PostgreSQL", "MongoDB", "Firebase", "Vercel / Render Deployment"]
  }
];

export default function Expertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 12 }
    }
  }

  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 px-4 sm:px-8 lg:px-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* LEFT COLUMN: Narrative & Engineering Principles */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-500">01 // CORE COMPETENCY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Architectural Philosophy</h2>
          </div>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I build systems that scale cleanly without breaking under heavy loads. Bridging the gap between bulletproof backend pipelines and hyper-responsive user interfaces, I specialize in shipping end-to-end applications designed for production stability.
          </p>

            