"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  // REPLACE 'YOUR_FORM_ID' WITH THE ID YOU COPIED FROM FORMSPREE
  const [state, handleSubmit] = useForm("xeeeqdkk");

  if (state.succeeded) {
    return (
      <div
        id="contact"
        className="col-span-1 md:col-span-12 bg-dark-card border border-white/10 rounded-3xl p-10 md:p-20 text-center flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 className="font-display text-3xl font-bold mb-2">Message Sent!</h2>
        <p className="text-muted">
          Thanks for reaching out. I'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className="col-span-1 md:col-span-12 bg-gradient-to-br from-dark-card to-black border border-white/10 rounded-3xl p-10 md:p-20 text-center mt-10"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
        Let's work together
      </h2>
      <p className="text-muted max-w-xl mx-auto mb-10">
        Have a project in mind? Fill out the form below and I'll get back to you
        within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-left">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white focus:border-accent outline-none transition-colors"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="text-left">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white focus:border-accent outline-none transition-colors"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-xs mt-1"
            />
          </div>
        </div>

        <div className="text-left">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            required
            className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white focus:border-accent outline-none transition-colors"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-accent text-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
