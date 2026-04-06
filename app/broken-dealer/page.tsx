import React from "react";
import Hero from "./sections/Hero";
import Testimonial from "./sections/Testimonial";
import EverythingYouAlwaysWanted from "./sections/EverythingYouAlwaysWanted";
import ItCoversEverything from "./sections/ItCoversEverything";
import CTA from "./sections/CTA";

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
