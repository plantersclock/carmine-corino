import React from "react";
import Hero from "./sections/Hero";
import FeaturedOn from "../home/sections/FeaturedOn";

import KeynotesUpd from "./sections/KeynotesUpd";
import BookCarmine from "./sections/BookCarmine";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="mt-24 lg:mt-8 xl:mt-4 bg-[#050505] lg:bg-transparent">
        <FeaturedOn />
      </div>
      <KeynotesUpd />
      <BookCarmine />
    </div>
  );
};

export default page;
