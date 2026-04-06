import Image from "next/image";
import React from "react";
import everythingImageMobile from "@/app/broken-dealer/images/car-top-image.jpg";
import everythingImage from "@/app/broken-dealer/images/eveything-you-always-wanted.png";

const EverythingYouAlwaysWanted = () => {
  return (
    <section className="flex flex-col relative z-20 w-full  aspect-auto lg:aspect-2560/2137  sm:min-h-none  lg:min-h-300 lg:max-h-400  -mt-20 sm:-mt-25 lg:-mt-30 2xl:-mt-35 bg-white">
      <Image
        src={everythingImage}
        alt="Everything you always wanted background"
        fill
        className="object-cover object-top-left hidden lg:block"
        priority
        placeholder="blur"
      />

      <div className="block relative lg:hidden aspect-1179/518">
        <Image
          src={everythingImageMobile}
          alt="Everything you always wanted background"
          fill
          className="object-contain object-top-left "
          priority
          placeholder="blur"
        />
      </div>
      <div className="bg-[#250F0F] hidden lg:block grow mt-50 overflow-none "></div>
      <div className="bg-[#250F0F] lg:bg-transparent block bg-black-auto lg:absolute h-full w-full lg:top-0 lg:left-0 pb-50">
        <div className="container mx-auto h-full px-6">
          <div className="grid lg:grid-cols-2 gap-y-0 gap-x-32 mt-0 lg:mt-[min(26vw,670px)] ">
            <div>
              <h2 className="text-heading text-white">
                <span className="text-theme-orange-500">
                  Everything You Always Wanted To Know About Bolting the Big
                  Firm
                </span>
              </h2>
              <h3 className="text-heading text-white mt-1 lg:mt-2 mb-12">
                (But Were Afraid to Ask)
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-subheading text-white">
                Most financial advisors didn&apos;t sign up to be product
                pushers.
              </h4>
              <p className="text-body text-white mt-12 lg:mt-6">
                Yet too many find themselves trapped in systems that prioritize
                corporate sales over client outcomes &mdash; tight in the golden
                handcuffs with no idea how to break free. Co-authors Carmine
                Corino and Daren Blonski know the psychic pain of staying stuck
                &mdash; because they lived it. And they found the way out.
              </p>
              <p className="text-body text-white">
                Broken Dealer is the field guide written for advisors who feel
                that pressure every day and are done pretending it&apos;s
                normal.
              </p>
              <p className="text-body text-white">
                This isn&apos;t another dull entry in the world of wealth
                management books. It&apos;s a blueprint for advisors who want
                independence with eyes wide open, a strategy in hand, and humor
                to survive the rollercoaster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingYouAlwaysWanted;
