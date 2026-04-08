import React from "react";
import Hero from "./sections/Hero";
import FeaturedOn from "../home/sections/FeaturedOn";

import KeynotesUpd from "./sections/KeynotesUpd";
import BookCarmine from "./sections/BookCarmine";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="mt-24 lg:mt-32 xl:mt-12 bg-[#5b5a5a] lg:bg-transparent">
        <FeaturedOn />
      </div>
      <KeynotesUpd />
      <BookCarmine />
    </div>
  );
};

export default page;
