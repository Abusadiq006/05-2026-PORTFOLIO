"use server"

import { Resend } from "resend"

// Initialize Resend safely on the server side
const resend = new Resend(process.env.RESEND_API_KEY);

