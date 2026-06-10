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
): Promise<ActionState> {
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // 1. Pro Validation (Simple but strict)
  const errors: ActionState["errors"] = {}
  if (!email || !email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Validation failed.", errors };
  }