import React from "react";
import Image from "next/image";
import heroImage from "@/app/home/images/hero-image.jpg";
import heroImageMobile from "@/app/home/images/hero-mobile.png";
import heroImageMobileBG from "@/app/home/images/hero-bg-mobile.png";

import GenericButton from "@/app/generic/components/GenericButton";
import GenericButtonGrid from "@/app/generic/components/GenericButtonGrid";

const Hero = () => {
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden lg:block relative z-20 w-full h-300 lg:h-230 xl:h-270 2xl:h-420 min-h-220 2xl:min-h-270 max-h-[115vh] ">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          className="object-cover object-[60%_center] xl:object-[75%_center]"
          priority
          placeholder="blur"
        />
        <div className="relative z-10 flex items-center h-[88%] container mx-auto">
          <div className="absolute bottom-0 left-0 w-full">
            <div
              className="absolute -inset-x-100 2xl:-inset-x-200 -inset-y-40 w-full overflow-x-hidden"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex items-baseline text-white gap-8 justify-center py-6">
              <p className="text-7xl xl:text-8xl 2xl:text-[9rem] font-bold">
                Carmine Corino
              </p>
              <p className="text-3xl xl:text-4xl  font-medium">
                ChFC®, AIF®, CFP®
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 w-full">
            <div></div>
            <div className="relative mx-auto w-full max-w-3xl lg:pl-12 xl:pl-22">
              <div
                className="absolute z-20 -inset-12 rounded-full pointer-events-none scale-120"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,.20) 0%, transparent 70%)",
                }}
              />
              <h2 className="relative z-30 text-heading text-white -mb-2">
                Redefining <br /> Financial Advisory
              </h2>
              <p className="relative z-30 my-8 max-w-md 2xl:max-w-lg text-body text-white">
                Helping independent advisors create businesses that protect
                their time, their families, and their future.
              </p>
              <GenericButtonGrid className="relative z-30 max-w-60 2xl:max-w-80">
                <GenericButton text="Book A Call" url="/contact" />
                <GenericButton
                  text="Visit Cornerstone"
                  color="blue"
                  newTab
                  url="https://www.cornerstoneplanninggroup.com/"
                />
              </GenericButtonGrid>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className="block lg:hidden">
        <div className="relative w-full aspect-1179/1240">
          <Image
            src={heroImageMobile}
            alt="Hero background"
            fill
            className="object-cover object-top"
            priority
            placeholder="blur"
          />
        </div>
        <div className=" relative z-20 w-full h-190 sm:h-200  max-h-[110vh] -mt-35">
          <Image
            src={heroImageMobileBG}
            alt="Hero background"
            fill
            className="object-cover object-top"
            priority
            placeholder="blur"
          />
          <div className="relative z-10 flex h-[88%] container mx-auto px-6">
            <div className="absolute bottom-0 left-0 w-full">
              <div
                className="absolute -inset-x-100 2xl:-inset-x-200 -inset-y-40 w-full overflow-x-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="px-6 relative flex flex-col items-baseline text-white justify-center pb-14">
                <p className="text-4xl sm:text-7xl xl:text-8xl 2xl:text-[9rem] font-bold mb-2">
                  Carmine Corino
                </p>
                <p className="text-2xl sm:text-4xl 2xl:text-5xl font-medium">
                  ChFC®, AIF®, CFP®
                </p>
              </div>
            </div>
            <div className="grid w-full mt-24 sm:mt-40">
              <div className="mx-auto w-full max-w-3xl">
                <h2 className="text-heading text-white -mb-2">
                  Redefining Financial Advisory
                </h2>
                <p className="my-8  max-w-md text-body text-white/90">
                  Helping independent advisors create businesses that protect
                  their time, their families, and their future.
                </p>
                <GenericButtonGrid className="max-w-120">
                  <GenericButton text="Book A Call" url="/contact" />
                  <GenericButton
                    text="Visit Cornerstone"
                    color="blue"
                    newTab
                    url="https://www.cornerstoneplanninggroup.com/"
                  />
                </GenericButtonGrid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
