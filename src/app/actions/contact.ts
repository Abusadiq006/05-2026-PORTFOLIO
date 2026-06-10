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

  // 2. Resend Execution
  try {
    const { data, error } = await resend.emails.send({
      // Note: On Resend's free tier without a custom domain, 
      // you must use 'onboarding@resend.dev' and send only to yourself.
      from: "Contact Form <onboarding@resend.dev>",
      to: ["your-personal-email@gmail.com"], // ← Your email here
      replyTo: email, 
      subject: `New Contact Form Submission from ${email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.5;">
          <h2>New Message Received</h2>
          <p><strong>From:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: "Failed to send email. Try again later." };
    }
    return { success: true, message: "Your message has been sent successfully!" };
  } catch (err) {