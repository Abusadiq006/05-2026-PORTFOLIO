"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE"); // IDLE, PENDING, SUCCESS, ERROR
}