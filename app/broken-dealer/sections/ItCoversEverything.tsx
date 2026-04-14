import Image from "next/image";
import React from "react";
import itCoversMobileImages from "@/app/broken-dealer/images/it-covers-everything-mobile-bg.png";
import itCoversImage from "@/app/broken-dealer/images/it-covers-everything-bg.png";

const ItCoversEverything = () => {
  return (
    <section className="flex flex-col relative z-30 w-full aspect-1179/1730 lg:aspect-2560/2107 min-h-270 max-h-275 lg:min-h-auto lg:max-h-200 xl:max-h-250 -mt-20 sm:-mt-25 md:-mt-25 lg:-mt-65 2xl:-mt-35 bg-[#250F0F]">
      <Image
        src={itCoversImage}
        alt="Chain background"
        fill
        className="object-cover object-top-left hidden lg:block"
        priority
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-black overflow-hidden rounded-tl-[3.75rem] lg:hidden">
        <Image
          src={itCoversMobileImages}
          alt="Chain background"
          fill
          className="object-cover object-top-left block lg:hidden -translate-y-2.5"
          priority
          placeholder="blur"
        />
      </div>

      <div className="absolute h-full w-full top-0 left-0 bg-black/40 rounded-tl-[3.75rem]">
        <div className="container mx-auto h-full px-6 -mt-12">
          <div className="flex h-full items-center justify-end">
            <div className="flex flex-col w-full md:w-[66%]  lg:w-[50%] ">
              <h2 className="text-heading text-white">
                It Covers Everything No One Tells You About Breaking Away:
              </h2>

              <div className="flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-10">
                <div>
                  <p className="text-body text-theme-orange-500 font-bold">
                    +{" "}
                    <span className="text-body text-white inline font-normal">
                      How to avoid the traps that sink transitions
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-body text-theme-orange-500 font-bold">
                    +{" "}
                    <span className="text-body text-white inline font-normal">
                      How to mentally survive the uncertainty
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-body text-theme-orange-500 font-bold">
                    +{" "}
                    <span className="text-body text-white inline font-normal">
                      How to protect your clients (and your sanity)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-body text-theme-orange-500 font-bold">
                    +{" "}
                    <span className="text-body text-white inline font-normal">
                      What happens when you finally see who&apos;s really in
                      your corner{" "}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-smallersubheading text-white mt-8 sm:mt-10">
                It&apos;s part handbook, part behind-the-scenes confessional,
                part pep talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItCoversEverything;
