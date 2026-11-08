"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import services from "@/data/services.json";
import content from "@/data/content.json";

type FormValues = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  const field =
    "w-full rounded-btn border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-ink">
          Name *
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={field}
          {...register("name", { required: "Please enter your name" })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-ink">
          Phone *
        </label>
        <input
          id="cf-phone"
          type="tel"
          autoComplete="tel"
          placeholder="03XX XXXXXXX"
          className={field}
          {...register("phone", {
            required: "Please enter your phone number",
            minLength: { value: 7, message: "Enter a valid phone number" },
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="cf-service" className="mb-1.5 block text-sm font-medium text-ink">
          Service
        </label>
        <select id="cf-service" className={field} {...register("service")}>
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-ink">
          Message *
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Tell us about the work — location, sizes if known, timeline…"
          className={`${field} resize-none`}
          {...register("message", {
            required: "Please describe the work you need",
            minLength: { value: 10, message: "A little more detail, please" },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            {content.contactPage.formTitle}
          </>
        )}
      </button>

      {state === "success" && (
        <p
          role="status"
          className="flex items-start gap-2 rounded-btn border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
          Thank you — your request has been received. We will contact you soon.
          For anything urgent, call us directly.
        </p>
      )}
      {state === "error" && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-btn border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          Something went wrong. Please call us directly — we are open 24 hours.
        </p>
      )}
    </form>
  );
}
