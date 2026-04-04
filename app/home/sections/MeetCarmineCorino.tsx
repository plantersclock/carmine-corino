import Image from "next/image";
import React from "react";
import bgImage from "@/app/home/images/meet-carmine-bg.png";
import bgImageMobile from "@/app/home/images/meet-carmine-mobile.jpg";
import GenericButtonGrid from "@/app/generic/components/GenericButtonGrid";
import GenericButton from "@/app/generic/components/GenericButton";

const MeetCarmineCorino = () => {
  return (
    <>
      <div className="relative w-full aspect-1179/1066">
        <Image
          src={bgImageMobile}
          alt="Meet Carmine Background"
          fill
          className="object-contain object-top-left block lg:hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, black calc(100% - 20px), #444142), ",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to bottom, black calc(100% - 20px), #444142), ",
            WebkitMaskComposite: "source-in",
          }}
          priority
        />
      </div>

      <section className="relative w-screen bg-[#444142] lg:bg-transparent h-205 sm:h-200 lg:h-260 xl:h-250 2xl:h-350  lg:rounded-tl-[9rem] lg:-mt-64 z-30">
        <Image
          src={bgImage}
          alt="Meet Carmine Background"
          fill
          className="object-cover object-top-left hidden lg:block"
          priority
        />

        <div className=" h-[90%]">
          <div className="container mx-auto h-full">
            <div className="grid lg:grid-cols-2 h-full w-full px-6 lg:px-0">
              <div className="hidden lg:block"></div>
              <div className=" relative flex flex-col lg:justify-center z-30 mx-auto w-full max-w-4xl lg:pl-12 xl:pl-18 h-full">
                <h2 className="text-heading  text-white ">
                  Meet Carmine Corino
                </h2>
                <h2 className="text-subheading mt-6 text-white max-w-3xl">
                  Partner to Financial Advisors
                </h2>
                <p className="my-8  2xl:max-w-xl text-body text-white">
                  Helping independent advisors create businesses that protect
                  their time, their families, and their future.
                </p>
                <GenericButtonGrid className="relative max-w-120 lg:max-w-120 2xl:max-w-120">
                  <GenericButton text="Book Carmine to Speak" url="#" />
                  <GenericButton
                    text="Read Broken Dealer"
                    color="gray"
                    url="#"
                  />
                  <div className="contents sm:hidden">
                    <GenericButton
                      text="Join the Collective"
                      color="gray"
                      url="#"
                    />
                  </div>
                  <div className="contents max-sm:hidden">
                    <GenericButton
                      text="Join the Advisor Collective"
                      color="gray"
                      url="#"
                    />
                  </div>
                </GenericButtonGrid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetCarmineCorino;
