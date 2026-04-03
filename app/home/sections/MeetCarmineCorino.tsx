import Image from "next/image";
import React from "react";
import bgImage from "@/app/home/images/meet-carmine-bg.png";
import GenericButtonGrid from "@/app/generic/components/GenericButtonGrid";
import GenericButton from "@/app/generic/components/GenericButton";

const MeetCarmineCorino = () => {
  return (
    <section className="relative w-full lg:h-210 xl:h-250 2xl:h-350  rounded-tl-[9rem] -mt-64 z-30">
      <Image
        src={bgImage}
        alt="Meet Carmine Background"
        fill
        className="object-cover object-top-left"
        priority
      />
      <div className=" h-[90%]">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-2 h-full w-full ">
            <div></div>
            <div className=" relative flex flex-col justify-center z-30 mx-auto w-full max-w-4xl lg:pl-12 xl:pl-18 h-full">
              <h2 className="text-heading  text-white ">Meet Carmine Corino</h2>
              <h2 className="text-subheading mt-6 text-white max-w-3xl">
                Partner to Financial Advisors
              </h2>
              <p className="my-8 max-w-md 2xl:max-w-xl text-body text-white">
                Helping independent advisors create businesses that protect
                their time, their families, and their future.
              </p>
              <GenericButtonGrid className="max-w-100 2xl:max-w-120">
                <GenericButton text="Book Carmine to Speak" url="#" />
                <GenericButton text="Read Broken Dealer" color="gray" url="#" />
                <GenericButton
                  text="Join the Advisor Collective"
                  color="gray"
                  url="#"
                />
              </GenericButtonGrid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCarmineCorino;
