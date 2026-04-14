import Image from "next/image";
import React from "react";
import bgImageMobile from "@/app/speaking/images/carmine-sitting.png";
import bgImage from "@/app/speaking/images/book-carmine-bg.png";
import GenericButton from "@/app/generic/components/GenericButton";

const BookCarmine = () => {
  return (
    <div className="  bg-black ">
      <section className="relative w-full min-h-100  lg:aspect-2560/1054 lg:bg-transparent bg-linear-to-b from-[#444242] to-[#615E61]  lg:bg-none lg:pt-0 pt-18 rounded-tl-[3.75rem] lg:rounded-tl-[9rem] mt-0 z-40">
        <Image
          src={bgImage}
          alt="Meet Carmine Background"
          fill
          className="object-cover object-top-left hidden lg:block"
          priority
        />

        <div className="container mx-auto h-full ">
          <div className=" grid lg:grid-cols-2 h-full w-full px-6 lg:px-0">
            <div className=" relative flex flex-col justify-center z-30 mx-auto w-full max-w-4xl lg:pl-12 xl:pl-18 h-full">
              <h2 className="text-heading text-white">Book Carmine</h2>
              <p className="my-8 lg:my-10 max-w-md sm:max-w-none 2xl:max-w-xl text-body text-white">
                Carmine&apos;s keynotes are where motivation ends and momentum
                begins. If your audience is ready for more than surface-level
                inspiration, it starts here.
              </p>
              <div className="max-w-100 mt-2">
                <GenericButton
                  text="Start the Conversation"
                  url="/contact?type=general"
                  color="orange"
                  minWidth="100%"
                />
              </div>
              <div className="w-full aspect-square mt-8 relative lg:hidden">
                <Image
                  src={bgImageMobile}
                  alt="Meet Carmine Background"
                  fill
                  className="object-contain block lg:hidden"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCarmine;
