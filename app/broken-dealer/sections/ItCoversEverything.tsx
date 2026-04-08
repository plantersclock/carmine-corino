import Image from "next/image";
import React from "react";
import itCoversMobileImages from "@/app/broken-dealer/images/it-covers-everything-mobile-bg.png";
import itCoversImage from "@/app/broken-dealer/images/it-covers-everything-bg.png";

const ItCoversEverything = () => {
  return (
    <section className="flex flex-col relative z-30 w-full aspect-1179/1730 lg:aspect-2560/2107 min-h-270 max-h-275 lg:max-h-350 -mt-20 sm:-mt-25 md:-mt-25 lg:-mt-65 2xl:-mt-35 bg-[#250F0F]">
      <Image
        src={itCoversImage}
        alt="Chain background"
        fill
        className="object-cover object-top-left hidden lg:block"
        priority
        placeholder="blur"
      />
      <Image
        src={itCoversMobileImages}
        alt="Chain background"
        fill
        className="object-cover object-top-left block lg:hidden"
        priority
        placeholder="blur"
      />
      <div className="bg-black grow mt-50 overflow-none"></div>
      <div
        className="absolute top-0 left-0 w-full h-full opacity-50 md:hidden"
        style={{
          background: "linear-gradient(to right, transparent 0%, black 25%)",
        }}
      />

      <div className="absolute h-full w-full top-0 left-0">
        <div className="container mx-auto h-full px-6 -mt-12">
          <div className="flex h-full items-center justify-end">
            <div className="flex flex-col w-[66%]  lg:w-[50%] ">
              <h2 className="text-heading text-white">
                It Covers Everything No One Tells You About Breaking Away:
              </h2>

              <div className="flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-10">
                <div>
                  <p className="text-body text-theme-orange-500">
                    How to avoid the traps
                  </p>
                  <p className="text-body text-white">That sink transitions</p>
                </div>
                <div>
                  <p className="text-body text-theme-orange-500">
                    How to mentally survive
                  </p>
                  <p className="text-body text-white">The uncertainty</p>
                </div>
                <div>
                  <p className="text-body text-theme-orange-500">
                    How to protect your clients
                  </p>
                  <p className="text-body text-white">(And your sanity)</p>
                </div>
                <div>
                  <p className="text-body text-theme-orange-500">
                    What happens
                  </p>
                  <p className="text-body text-white">
                    When you finally see who&apos;s really in your corner
                  </p>
                </div>
              </div>

              <p className="text-body text-white mt-8 sm:mt-10">
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
