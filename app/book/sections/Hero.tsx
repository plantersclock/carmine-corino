import Image from "next/image";
import React from "react";
import heroImage from "@/app/book/images/book-hero-bg.png";
import heroImageMobile from "@/app/book/images/hero-mobile-bg.png";
import GenericButton from "@/app/generic/components/GenericButton";

const Hero = () => {
  return (
    <section className="block relative z-20 w-full aspect-1000/1880 lg:aspect-[2560/2066] max-h-screen bg-[#050505]">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-contain object-top hidden lg:block"
        priority
        placeholder="blur"
      />
      <Image
        src={heroImageMobile}
        alt="Hero background"
        fill
        className="object-contain object-top block lg:hidden"
        priority
        placeholder="blur"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-full grid lg:grid-cols-2 lg:gap-x-32 xl:gap-x-40 2xl:gap-x-58">
          <div></div>
          <div className="flex flex-col justify-center  mt-24 sm:mt-0 pl-12 pr-12 lg:pr-4 container mx-auto ">
            <div>
              <h2 className="text-white  text-heading max-w-xs md:max-w-md 2xl:max-w-2xl">
                Wealth Management Books
              </h2>
              <p className="text-body text-white max-w-lg 2xl:max-w-2xl py-6 md:py-8">
                <span className="text-theme-orange-500">Broken Dealer:</span>{" "}
                Navigating the Path to Financial Advisor Independence
              </p>
              <div className="max-w-60 mt-2">
                <GenericButton
                  text="Buy Now"
                  url="/book"
                  color="orange"
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
