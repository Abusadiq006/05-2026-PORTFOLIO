"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE"); // IDLE, PENDING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("PENDING")

    try {
      // Form handling using Next.js route or Server Action link
      // Example placeholder logic until API endpoint is live
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("ERROR");
    }
  };
}
