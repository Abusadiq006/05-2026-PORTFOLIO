"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ActionState = {
  success: boolean
  message: string
  errors?: {
    email?: string
    message?: string
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendContactEmail(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  void prevState

  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const message = String(formData.get("message") || "").trim()

  const errors: ActionState["errors"] = {}
  if (!email || !email.includes("@")) {
    errors.email = "Please enter a valid email address."
  }
  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters long."
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Validation failed.", errors }
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return { success: false, message: "Email service is not configured." }
  }

  try {
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New portfolio message from ${name || email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.5;">
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${escapeHtml(name || "Not provided")}</p>
          <p><strong>From:</strong> ${escapeHtml(email)}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, message: "Failed to send email. Try again later." }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (err) {
    console.error("Server Action Exception:", err)
    return { success: false, message: "An unexpected error occurred." }
  }
}
