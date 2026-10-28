"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

const budgets = ["Not sure yet", "Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+"];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const next = {};
    if (!data.name?.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) next.email = "Enter a valid email address, like name@company.com.";
    if (!data.message?.trim() || data.message.trim().length < 10) next.message = "Tell us a little about your project (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector("[aria-invalid='true']")?.focus();
      return;
    }

    setStatus("sending");
    setName(data.name.trim().split(" ")[0]);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>Message sent. Thanks, {name}.</h3>
        <p>We will reply within one working day. If it is urgent, call us on {site.phone}.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {errors.name && <p className="field-err" id="name-err">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          {errors.email && <p className="field-err" id="email-err">{errors.email}</p>}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Phone or WhatsApp <span className="opt">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="company">Company <span className="opt">(optional)</span></label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Choose a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>Choose a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">About your project</label>
        <textarea id="message" name="message" rows={6} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {errors.message && <p className="field-err" id="message-err">{errors.message}</p>}
      </div>

      {/* honeypot: real visitors never see or fill this */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          The message did not send. Check your connection and try again, or email us at {site.email}.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
