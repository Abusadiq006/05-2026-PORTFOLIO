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
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 overflow-hidden bg-slate-950 text-slate-100 border-b border-slate-900"></section>
    )
}