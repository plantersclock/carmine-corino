import React from "react";
import Image from "next/image";
import bookImage from "@/app/broken-dealer/images/cta-image.png";
import GenericButton from "@/app/generic/components/GenericButton";

const CTA = () => {
  return (
    <section className="relative w-full rounded-tl-[3.75rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] -mt-30 2xl:-mt-24 z-30 bg-linear-to-b from-[#444242] to-[#615E61]">
      <div className="container mx-auto px-6  pt-16 lg:pb-0 xl:pt-18 h-full flex">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-24  w-full">
          {/* Text Content */}
          <div className="flex xl:pb-12 flex-col max-w-xl lg:max-w-3xl xl:max-w-5xl text-white ">
            <h2 className="text-heading pt-2">
              If You&apos;re Thinking About Leaving...{" "}
              <span className="text-theme-orange-500">Read This First</span>
            </h2>
            <p className="text-body mt-8">
              Your freedom, your identity, and your future as an advisor are too
              important to chance.
            </p>
            <p className="text-body mt-4">
              This book saves you from the mistakes others learned the hard way
              &mdash; and gives you the courage to do what you already know is
              right.
            </p>
            <div className="mt-8 max-w-120 lg:max-w-50">
              <GenericButton
                text="Buy Now"
                url="https://www.amazon.com/Broken-Dealer-Navigating-Financial-Independence/dp/1642256552"
                color="orange"
                newTab
                minWidth="100%"
              />
            </div>
          </div>
          {/* Book Image */}

          <div className="w-full relative aspect-square  xl:w-[100%] right-0 flex flex-col items-center justify-end lg:justify-end self-end  lg:pt-32 xl:pt-0 lg:-mt-48 xl:min-h-100">
            <Image
              src={bookImage}
              alt="Broken Dealer book"
              className="xl:w-150 xl:w-full h-auto object-cover xl:object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
