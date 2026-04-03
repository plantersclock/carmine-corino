import Image from "next/image";
import React from "react";
import bgImage from "@/app/home/images/this-isnt-just-about-your-business-bg.png";
import icon1 from "@/app/home/images/icon-1.png";
import icon2 from "@/app/home/images/icon-2.png";
import icon3 from "@/app/home/images/icon-3.png";
import icon4 from "@/app/home/images/icon-4.png";
import icon5 from "@/app/home/images/icon-5.png";

const AboutYourLife = () => {
  return (
    <section className="lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] overflow-hidden relative w-full lg:h-210 xl:h-250 2xl:h-350  rounded-tl-[9rem] -mt-64 z-30">
      <Image
        src={bgImage}
        alt="Meet Carmine Background"
        fill
        className="object-cover object-bottom-left"
        priority
      />
      <div className=" h-[90%] relative z-40">
        <div className="h-full container mx-auto">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <h2 className="text-heading text-white">
              This Isn&apos;t Just About Your Business.
            </h2>
            <h3 className="text-heading text-theme-blue-400">
              It&apos;s About Your Life.
            </h3>
            <p className="text-white text-smallersubheading text-center pt-12 pb-4 max-w-6xl">
              Advisors think they&apos;re searching for better payouts, better
              systems, better tools. What they’re actually searching for is:
            </p>
            <div className="grid grid-cols-5 gap-16 py-16">
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image src={icon1} alt="Purpose" height={160} />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Purpose</span>
                  <br />
                  <span className="text-white">In the Work They Do</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image src={icon2} alt="Time" height={160} />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Time</span>
                  <br />
                  <span className="text-white">With Their Family</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image src={icon3} alt="Clarity" height={160} />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Clarity</span>
                  <br />
                  <span className="text-white">In Their Decisions</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image src={icon4} alt="Confidence" height={160} />
                </div>
                <p className="text-center text-icontext uppercase tracking-widest mt-auto">
                  <span className="text-theme-blue-400">More Confidence</span>
                  <br />
                  <span className="text-white">In Their Leadership</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 h-full">
                <div className="flex-1 flex items-center">
                  <Image src={icon5} alt="Peace" height={160} />
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
