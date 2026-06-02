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
            
        }
    }
}   