import Image from "next/image";
import React from "react";
import everythingImageMobile from "@/app/broken-dealer/images/car-top-image.jpg";
import everythingImage from "@/app/broken-dealer/images/everything-you-always-wanted.jpg";

const EverythingYouAlwaysWanted = () => {
  return (
    <section className="flex flex-col relative z-20 w-full  aspect-auto  sm:min-h-none -mt-20 sm:-mt-25 lg:-mt-30 2xl:-mt-35 bg-white">
      {/* <Image
        src={everythingImage}
        alt="Everything you always wanted background"
        fill
        className="object-cover object-top-left hidden lg:block"
        priority
        placeholder="blur"
      /> */}

      <div className="block lg:hidden relative z-20 aspect-1179/518">
        <Image
          src={everythingImageMobile}
          alt="Everything you always wanted background"
          fill
          className="object-contain object-top-left "
          priority
          placeholder="blur"
        />
      </div>

      <div className="hidden lg:block relative z-20 aspect-3704/1143 rounded-tl-[3.75rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] overflow-hidden">
        <Image
          src={everythingImage}
          alt="Everything you always wanted background"
          fill
          className="object-contain object-top-left "
          priority
          placeholder="blur"
        />
      </div>

      <div
        className="block z-20 relative w-full pb-50 lg:pb-100 2xl:pb-70 pt-14 -mt-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0px, #250F0F 20px)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-y-0 gap-x-32 mt-0  ">
            <div className="">
              <h2 className="text-heading text-white tracking-tight">
                <span className="text-theme-orange-500">
                  Everything You Always Wanted To Know About Bolting the Big
                  Firm
                </span>
              </h2>
              <h3 className="text-heading text-white mt-1 lg:mt-2 mb-12 tracking-tight">
                (But Were Afraid to Ask)
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-smallersubheading text-white">
                Most financial advisors didn&apos;t sign up to be product
                pushers.
              </h4>
              <p className="text-body text-white mt-4 lg:mt-6">
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
