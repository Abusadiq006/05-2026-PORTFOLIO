"use server"

import { Resend } from "resend"

// Initialize Resend safely on the server side
const resend = new Resend(process.env.RESEND_API_KEY);

// Define our strict state type for the UI
export type ActionState = {
  success: boolean
  message: string
  errors?: {
    email?: string
    message?: string
  }
}

export async function sendContactEmail(
  prevState: ActionState,
  formData: FormData