import React from "react";
import Image from "next/image";
import feature1 from "@/app/home/images/feature-1.png";
import feature2 from "@/app/home/images/feature-2.png";
import feature3 from "@/app/home/images/feature-3.png";
import feature4 from "@/app/home/images/feature-4.png";

const FeaturedOn = () => {
  return (
    <section className="relative w-full h-100 sm:h-130 lg:h-170 2xl:h-190  rounded-tl-[3.75rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] -mt-30 2xl:-mt-35 z-30 bg-white">
      <div className=" h-[80%] container mx-auto">
        <h2 className="text-heading pt-12 sm:pt-24 lg:pt-24 2xl:pt-32 text-center">
          Featured On
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-18 lg:gap-0 2xl:gap-0 mt-12 sm:mt-18  items-center container mx-auto px-6 scale-[.7] lg:scale-[.95]  xl:scale-[0.95] 2xl:scale-100 origin-top">
          <div className="flex justify-center">
            <Image src={feature1} alt="Financial Planning" height={70} />
          </div>
          <div className="flex justify-center">
            <Image src={feature2} alt="The Perfect RIA" height={120} />
          </div>
          <div className="flex justify-center">
            <Image
              src={feature3}
              alt="The Magellan Network Podcast"
              height={130}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={feature4}
              alt="The Broken Dealer Podcast"
              height={120}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
