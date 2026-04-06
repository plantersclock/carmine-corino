import React from "react";
import Image from "next/image";
import bookImage from "@/app/broken-dealer/images/book-image.png";
import GenericButton from "@/app/generic/components/GenericButton";

const CTA = () => {
  return (
    <section className="relative w-full rounded-tl-[3.75rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] -mt-30 2xl:-mt-35 z-30 bg-white">
      <div className="container mx-auto px-6  py-16 xl:py-24 h-full flex">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-24  w-full">
          {/* Text Content */}
          <div className="flex flex-col max-w-xl lg:max-w-3xl xl:max-w-xl  ">
            <h2 className="text-heading">
              If You&apos;re Thinking About Leaving...{" "}
              <span className="text-theme-orange-500">Read This First</span>
            </h2>
            <p className="text-body mt-8">
              Your freedom, your identity, and your future as an advisor are too
              important to chance.
            </p>
            <p className="text-body mt-6">
              This book saves you from the mistakes others learned the hard way
              &mdash; and gives you the courage to do what you already know is
              right.
            </p>
            <div className="mt-10 max-w-50">
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

          <div
            className="h-full w-full xl:w-[50%] right-0 flex flex-col items-center justify-center sm:-mr-2  md:ml-28 lg:ml-36 xl:-mr-10 xl:ml-10 2xl:-mr-20 2xl:ml-20"
            style={{
              maskImage:
                "linear-gradient(to right, black calc(100% - 24px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, black calc(100% - 24px), transparent)",
            }}
          >
            <Image
              src={bookImage}
              alt="Broken Dealer book"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
