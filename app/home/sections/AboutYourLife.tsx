import Image from "next/image";
import React from "react";
import bgImage from "@/app/home/images/this-isnt-just-about-your-business-bg.png";
import bgImageMobile from "@/app/home/images/about-your-life-mobile.png";
import icon1 from "@/app/home/images/icon-1.png";
import icon2 from "@/app/home/images/icon-2.png";
import icon3 from "@/app/home/images/icon-3.png";
import icon4 from "@/app/home/images/icon-4.png";
import icon5 from "@/app/home/images/icon-5.png";

const AboutYourLife = () => {
  return (
    <section className="bg-[#747676] px-4 rounded-tl-[3.5rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] overflow-hidden relative w-full h-595 sm:h-600 lg:h-260 xl:h-250 2xl:h-350   -mt-64 z-30">
      <Image
        src={bgImage}
        alt="Meet Carmine Background"
        fill
        className="object-cover object-bottom-left hidden lg:block"
        priority
      />
      <Image
        src={bgImageMobile}
        alt="Meet Carmine Background Mobile"
        fill
        className="object-cover object-bottom-left lg:hidden"
        priority
      />
      <div className=" h-[90%] relative z-40">
        <div className="h-full container mx-auto">
          <div className="flex flex-col items-center md:justify-center h-full w-full mt-18 md:mt-0">
            <h2 className="text-heading text-white text-center">
              This Isn&apos;t Just About Your Business.
            </h2>
            <h3 className="text-heading text-theme-blue-400 text-center">
              It&apos;s About Your Life.
            </h3>
            <p className="text-white text-smallersubheading text-center pt-12 pb-4 max-w-2xl lg:max-w-4xl xl:max-w-6xl">
              Advisors think they&apos;re searching for better payouts, better
              systems, better tools. What they’re actually searching for is:
            </p>
            <div className="grid lg:grid-cols-5 gap-16 py-16">
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image
                    src={icon1}
                    alt="Purpose"
                    width={160}
                    height={160}
                    className="w-80vw lg:w-[8vw] h-auto"
                  />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Purpose</span>
                  <br />
                  <span className="text-white">In the Work They Do</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image
                    src={icon2}
                    alt="Time"
                    width={160}
                    height={160}
                    className="w-80vw lg:w-[8vw] h-auto"
                  />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Time</span>
                  <br />
                  <span className="text-white">With Their Family</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image
                    src={icon3}
                    alt="Clarity"
                    width={160}
                    height={160}
                    className="w-80vw lg:w-[8vw] h-auto"
                  />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Clarity</span>
                  <br />
                  <span className="text-white">In Their Decisions</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image
                    src={icon4}
                    alt="Confidence"
                    width={160}
                    height={160}
                    className="w-80vw lg:w-[8vw] h-auto"
                  />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Confidence</span>
                  <br />
                  <span className="text-white">In Their Leadership</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image
                    src={icon5}
                    alt="Peace"
                    width={160}
                    height={160}
                    className="w-80vw lg:w-[8vw] h-auto"
                  />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Peace</span>
                  <br />
                  <span className="text-white">In Their Day-to-Day</span>
                </p>
              </div>
            </div>
            <p className="text-center text-body text-white max-w-4xl 2xl:max-w-6xl">
              Carmine works with advisors who feel held back—whether by the
              golden handcuffs of big banking or by the ceilings they’ve built
              for themselves. His financial advisor coaching helps them reignite
              their businesses and take ownership of their future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYourLife;
