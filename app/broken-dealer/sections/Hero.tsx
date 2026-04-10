import Image from "next/image";
import React from "react";
import heroImage from "@/app/broken-dealer/images/book-hero-bg.png";
import heroImageMobile from "@/app/broken-dealer/images/hero-mobile-bg.jpg";
import bookImage from "@/app/broken-dealer/images/book.png";
import GenericButton from "@/app/generic/components/GenericButton";

const Hero = () => {
  return (
    <section className=" block relative z-20 w-full aspect-auto lg:py-18 lg:aspect-[2560/2066] min-h-200 lg:max-h-[115vh] bg-[#050505]">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover object-center hidden lg:block"
        priority
        placeholder="blur"
      />
      <div className="mt-4 block lg:hidden relative aspect-1000/1070">
        <Image
          src={heroImageMobile}
          alt="Hero background"
          fill
          className="object-contain object-top block lg:hidden"
          priority
          placeholder="blur"
        />{" "}
      </div>
      <div className="relative bg-[#050505] lg:bg-transparent pb-24 lg:pb-0 block lg:absolute lg:top-0 lg:left-0 w-full h-full pr-6">
        <div className="h-full grid lg:grid-cols-2 ">
          <div className="hidden lg:flex items-center justify-center relative ">
            <Image
              src={bookImage}
              alt="Broken Dealer book"
              className="w-full max-w-md xl:max-w-lg contain object-center lg:scale-70 xl:scale-80 2xl:scale-90"
            />
          </div>
          <div className="flex flex-col justify-center  mt-8 lg:mt-0 pl-12 pr-12 lg:pr-4 container mx-auto lg:pl-24 xl:pl-24 2xl:pl-32 ">
            <div>
              <h2 className="text-white  text-heading max-w-xs md:max-w-md 2xl:max-w-2xl">
                The Wealth Management Book
                <br /> That Changes Everything
              </h2>
              <p className="text-body text-white max-w-lg 2xl:max-w-2xl py-6 md:py-8">
                <span className="text-theme-orange-500">Broken Dealer:</span>{" "}
                Navigating the Path to Financial Advisor Independence
              </p>
              <div className="max-w-120 lg:max-w-60 mt-2">
                <GenericButton
                  text="BUY ON AMAZON NOW"
                  url="https://www.amazon.com/Broken-Dealer-Navigating-Financial-Independence/dp/1642256552"
                  color="orange"
                  newTab
                  minWidth="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
