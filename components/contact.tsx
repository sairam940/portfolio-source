"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_SEND_EMAIL_API_URL || "/api/send-email";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderEmail, message }),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json?.error || "Failed to send email");
        setIsSubmitting(false);
        return;
      }

      toast.success("Email sent successfully!");
      setSenderEmail("");
      setMessage("");
    } catch (error) {
      console.error("Client send error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-3xl px-4 sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="section-shell rounded-[2rem] p-6 sm:p-8">
        <p className="-mt-2 text-center text-base text-slate-600 dark:text-slate-300">
          Looking for a senior engineer who can build reliable systems and accelerate delivery? I’m open to conversations around platform engineering, automation, cloud architecture, and quality-driven product development.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:sai.ram940@gmail.com?subject=Portfolio%20Inquiry"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900"
          >
            Email me
          </a>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
            Quick message
          </p>

          <form className="mx-auto flex max-w-xl flex-col gap-3 dark:text-black" onSubmit={handleSubmit}>
            <input
              className="h-14 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <textarea
              className="h-52 rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mx-auto flex h-[3rem] w-[9rem] items-center justify-center gap-2 rounded-full bg-slate-900 text-white transition hover:scale-105 hover:bg-slate-800 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-slate-600 dark:bg-white dark:text-slate-900"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-slate-900 dark:border-slate-900"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
