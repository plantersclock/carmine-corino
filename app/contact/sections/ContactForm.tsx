"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/app/contact/images/contact-bg.jpg";

type InquiryType = "advisors" | "general";

const ContactForm = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType>("advisors");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [hovered, setHovered] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook up Resend
    const payload = {
      ...formData,
      inquiryType,
    };
    console.log("Form submitted:", payload);
  };

  return (
    <section className="relative w-full min-h-screen">
      <Image
        src={bgImage}
        alt="Contact background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="w-full max-w-2xl bg-white/40 backdrop-blur-sm p-8 lg:p-16">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-heading">Contact Me.</h1>
            <p className="text-body mt-4">
              Reach out. Ask the question.
              <br />
              Start the change.
              <br />
              The only thing missing is your first move.
            </p>
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
            <motion.button
              type="submit"
              className="relative inline-flex items-center justify-center px-10 py-3"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileTap={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <div className="absolute inset-y-0 left-0 right-0 -skew-x-12 origin-bottom-right rounded-br-[2.5rem] bg-gradient-to-r from-[#ca3e19] to-[#fb6938]" />
              <motion.div
                className="absolute inset-y-0 left-0 right-0 -skew-x-12 origin-bottom-right rounded-br-[2.5rem] bg-black"
                initial={false}
                animate={{
                  clipPath: hovered ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
              <motion.span
                className="relative z-10 text-base sm:text-xl font-medium uppercase tracking-widest text-white"
                initial={false}
                animate={{ opacity: hovered ? 0 : 1 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                Submit
              </motion.span>
              <motion.span
                className="absolute z-10 text-base sm:text-xl font-semibold uppercase tracking-widest text-transparent bg-gradient-to-r from-[#e04a1f] to-[#ff8040] bg-clip-text"
                initial={false}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  delay: hovered ? 0.15 : 0,
                }}
              >
                Submit
              </motion.span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
