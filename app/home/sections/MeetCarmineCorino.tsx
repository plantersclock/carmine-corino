import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgImage from "@/app/home/images/meet-carmine-bg.png";
import bgImageMobile from "@/app/home/images/meet-carmine-mobile.jpg";
import GenericButtonGrid from "@/app/generic/components/GenericButtonGrid";
import GenericButton from "@/app/generic/components/GenericButton";

const MeetCarmineCorino = () => {
  return (
    <>
      <div className="relative w-full aspect-1179/1066 lg:hidden">
        <Image
          src={bgImageMobile}
          alt="Meet Carmine Background"
          fill
          className="object-contain object-top-left block lg:hidden "
          style={{
            maskImage:
              "linear-gradient(to bottom, black calc(100% - 20px), #444142), ",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to bottom, black calc(100% - 20px), #444142), ",
            WebkitMaskComposite: "source-in",
            filter: "saturate(1.25)",
          }}
          priority
        />
      </div>

      <section
        id="about"
        className="relative w-screen bg-[#444142] lg:bg-transparent h-205 sm:h-200 lg:h-260 xl:h-250 2xl:h-310  lg:rounded-tl-[9rem] lg:-mt-64 z-30 scroll-mt-32 lg:scroll-mt-24"
      >
        <Image
          src={bgImage}
          alt="Meet Carmine Background"
          fill
          className="object-cover object-top-left hidden lg:block"
          priority
          style={{ filter: "saturate(1.25)" }}
        />

        <div className=" h-[85%]">
          <div className="container mx-auto h-full">
            <div className="grid lg:grid-cols-2 h-full w-full px-6 lg:px-0">
              <div className="hidden lg:block"></div>
              <div className=" relative flex flex-col lg:justify-center z-30 mx-auto w-full max-w-4xl lg:pl-12 xl:pl-18 h-full">
                <h2 className="text-heading  text-white ">
                  Meet <br />
                  Carmine Corino
                </h2>
                <h2 className="text-smallersubheading mt-6 text-white max-w-3xl">
                  Partner to Financial Advisors
                </h2>
                <p className="my-8  2xl:max-w-xl text-body text-white">
                  Carmine Corino has spent more than twenty years calling out
                  what the financial industry refuses to admit: the system
                  wasn’t built for advisors – it was built to control them. As
                  the founder of Cornerstone Planning Group and co-author of the
                  #1 bestselling book{" "}
                  <Link href="/broken-dealer" className="italic cursor-pointer">
                    <em>Broken Dealer</em>
                  </Link>
                  , Carmine has become the voice advisors turn to when they’re
                  ready to stop performing for institutions and start leading
                  with integrity.
                </p>
                <GenericButtonGrid className="relative max-w-120 lg:max-w-110 2xl:max-w-120">
                  <GenericButton text="Book Carmine to Speak" url="#" />
                  <GenericButton
                    text="Read Broken Dealer"
                    color="gray"
                    url="https://www.amazon.com/Broken-Dealer-Navigating-Financial-Independence/dp/1642256552"
                    newTab
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
