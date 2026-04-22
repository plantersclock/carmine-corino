import React from "react";
import type { Metadata } from "next";
import Hero from "./sections/Hero";
import Testimonial from "./sections/Testimonial";
import EverythingYouAlwaysWanted from "./sections/EverythingYouAlwaysWanted";
import ItCoversEverything from "./sections/ItCoversEverything";
import CTA from "./sections/CTA";

export const metadata: Metadata = {
  openGraph: {
    images: ["/OG%20Image_BrokenDealer.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OG%20Image_BrokenDealer.png"],
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <Testimonial />
      <EverythingYouAlwaysWanted />
      <ItCoversEverything />
      <CTA />
    </div>
  );
};

export default page;
