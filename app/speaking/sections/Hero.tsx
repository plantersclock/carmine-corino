import Image from "next/image";
import React from "react";
import heroImage from "@/app/speaking/images/speaking-hero.jpg";
import heroImageMobile from "@/app/speaking/images/speaking-hero-mobile.png";
import GenericButton from "@/app/generic/components/GenericButton";

const Hero = () => {
  return (
    <section className=" block relative z-20 w-full aspect-auto lg:aspect-2560/1856 min-h-200 lg:h-220 xl:h-260 2xl:h-380 lg:min-h-280 lg:max-h-[110vh] bg-[#5b5a5a]">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover object-center  hidden lg:block lg:mt-18 xl:mt-6 2xl:mt-0"
        priority
        placeholder="blur"
        style={{
          maskImage:
            "linear-gradient(to top, black calc(100% - 32px), transparent)",
          WebkitMaskImage:
            "linear-gradient(to top, black calc(100% - 32px), transparent)",
        }}
      />
      <div
        className=" block lg:hidden relative aspect-1179/1331"
        style={{
          maskImage:
            "linear-gradient(to bottom, black calc(100% - 32px), transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black calc(100% - 32px), transparent)",
        }}
      >
        <Image
          src={heroImageMobile}
          alt="Hero background"
          fill
          className="object-contain object-top block lg:hidden"
          priority
          placeholder="blur"
          style={{ filter: "saturate(1.4)" }}
        />{" "}
      </div>
      {/* Diagonal sliced semi-opaque black overlay (desktop only) */}
      <div
        className="hidden lg:block absolute inset-0 bg-black/50 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 45% 0, 60% 100%, 0 100%)",
        }}
      />
      <div className="relative bg-[#5b5a5a] lg:bg-transparent pb-24 lg:pb-0 block lg:absolute lg:top-0 lg:left-0 w-full h-full">
        <div className="h-full container mx-auto grid lg:grid-cols-2 lg:gap-x-32 xl:gap-x-40 2xl:gap-x-58">
          <div className="flex flex-col justify-center  mt-8 lg:mt-0 pl-12 pr-12 lg:pr-4 container mx-auto">
            <div className="max-w-2xl lg:max-w-md 2xl:max-w-xl lg:mt-44 xl:mt-0">
              <h2 className="text-white text-heading">Speaking.</h2>
              <h3 className="text-smallersubheading text-white mt-6 max-w-md lg:max-w-none">
                Keynotes for the Uncompromising Advisor
              </h3>
              <p className="text-body text-white mt-18 lg:mt-6">
                Some advisors are ready to break free from conflicted systems
                that trade integrity for quotas. Others are scaling fast &mdash;
                but know their business shouldn&apos;t demand every hour they
                have.
              </p>
              <p className="text-body text-white mt-8 lg:mt-4">
                Carmine speaks to both.
              </p>
              <p className="text-body text-white mt-8 lg:mt-4">
                His keynotes are built around independence without isolation,
                integrity over incentives, and the truth every advisor
                eventually faces: your time is your alpha.
              </p>
              <p className="text-body text-white mt-8">
                Bring Carmine to your next event.
                <br />
                Your audience won&apos;t hear this anywhere else.
              </p>
              <div className="max-w-90 mt-12 lg:mt-8">
                <GenericButton
                  text="Elevate Your Event"
                  url="/contact"
                  color="orange"
                  minWidth="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
