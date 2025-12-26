"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error:
        "Missing RESEND_API_KEY environment variable. Please set RESEND_API_KEY in .env.local and restart the dev server.",
    };
  }

  const resend = new Resend(apiKey);

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sai.ram940@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    console.error("Resend send error:", getErrorMessage(error));
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
