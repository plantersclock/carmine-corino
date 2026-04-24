"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import bgImage from "@/app/contact/images/contact-bg.jpg";
import GenericButton from "@/app/generic/components/GenericButton";

type InquiryType = "advisors" | "general";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const initialType: InquiryType =
    searchParams.get("type") === "general" ? "general" : "advisors";
  const [inquiryType, setInquiryType] = useState<InquiryType>(initialType);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, inquiryType }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  return (
    <section className="relative w-full min-h-screen">
      <Image
        src={bgImage}
        alt="Contact background"
        fill
        className="object-cover"
        priority
        placeholder="blur"
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="w-full max-w-4xl bg-white/40 backdrop-blur-sm p-8 lg:px-24 lg:py-18">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-heading">Contact Me.</h1>
            <div className="flex justify-center">
              {inquiryType === "advisors" ? (
                <p className="text-body mt-4">
                  Reach out. Ask the question.
                  <br />
                  Start the change.
                  <br />
                  The only thing missing is your first move.
                </p>
              ) : (
                <p className="text-body mt-4 max-w-xs">
                  Use the form to reach out for press, podcast appearances, or
                  general questions.
                </p>
              )}
            </div>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-sm overflow-hidden ">
              <button
                type="button"
                onClick={() => setInquiryType("advisors")}
                className={`px-8 py-2.5 text-sm font-semibold uppercase tracking-widest transition-colors ${
                  inquiryType === "advisors"
                    ? "bg-gradient-to-r from-[#ca3e19] to-[#fb6938] text-white"
                    : "bg-[#333333] text-white"
                }`}
              >
                Advisors
              </button>
              <button
                type="button"
                onClick={() => setInquiryType("general")}
                className={`px-8 py-2.5 text-sm font-semibold uppercase tracking-widest transition-colors ${
                  inquiryType === "general"
                    ? "bg-gradient-to-r from-[#ca3e19] to-[#fb6938] text-white"
                    : "bg-[#333333] text-white"
                }`}
              >
                General
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  {inquiryType === "advisors" ? "First Name" : "First Name"}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ca3e19]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  {inquiryType === "advisors" ? "Last Name" : "Last Name"}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ca3e19]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  {inquiryType === "advisors" ? "Email" : "Email"}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ca3e19]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  {inquiryType === "advisors" ? "Phone" : "Phone"}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ca3e19]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                {inquiryType === "advisors" ? "Message" : "Message"}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Input"
                rows={5}
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ca3e19] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-start gap-3">
              <GenericButton
                text={status === "submitting" ? "Sending..." : "Submit"}
                type="submit"
                color="orange"
                minWidth="160px"
              />
              {status === "success" && (
                <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                  Thanks — your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
