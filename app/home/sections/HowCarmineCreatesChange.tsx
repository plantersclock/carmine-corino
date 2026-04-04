import React from "react";
import Image from "next/image";
import change1 from "@/app/home/images/change-1.png";
import change2 from "@/app/home/images/change-2.png";
import change3 from "@/app/home/images/change-3.png";
import GenericButton from "@/app/generic/components/GenericButton";

const HowCarmineCreatesChange = () => {
  return (
    <section className="relative w-full rounded-tl-[3.5rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] -mt-30 2xl:-mt-35 z-30 bg-white">
      <div className="container mx-auto px-6 py-18 md:py-24 xl:py-32">
        <h2 className="text-heading text-center">How Carmine Creates Change</h2>
        <div className="grid max-w-sm mx-auto lg:max-w-none lg:grid-cols-3 gap-24 mt-16">
          {/* Speaking Engagements */}
          <div className="grid lg:grid-rows-subgrid row-span-4 gap-4 items-start justify-items-center text-center">
            <Image
              src={change1}
              alt="Speaking Engagements"
              className="w-full rounded-full"
            />
            <h3 className="text-smallersubheading mt-6">
              Speaking Engagements
            </h3>
            <p className="text-body">
              High-impact, no-nonsense keynotes that challenge advisors to break
              from traditional thinking and take control of what comes next.
            </p>
            <div className="w-full self-end mt-6">
              <GenericButton text="Book Carmine" url="#" minWidth="100%" />
            </div>
          </div>

          {/* The Book: Broken */}
          <div className="grid lg:grid-rows-subgrid row-span-4 gap-4 items-start justify-items-center text-center">
            <Image
              src={change2}
              alt="The Book: Broken Dealer"
              className="w-full rounded-full"
            />
            <h3 className="text-smallersubheading mt-6">The Book: Broken</h3>
            <p className="text-body">
              A blueprint for advisors ready to break away the right
              way&mdash;without losing themselves in the process.
            </p>
            <div className="w-full self-end pt-4 lg:pt-0">
              <GenericButton text="Read the Book" url="#" minWidth="100%" />
            </div>
          </div>

          {/* Community & Resources */}
          <div className="grid lg:grid-rows-subgrid row-span-4 gap-4 items-start justify-items-center text-center">
            <Image
              src={change3}
              alt="Community & Resources"
              className="w-full rounded-full"
            />
            <h3 className="text-smallersubheading mt-6">
              Community &amp; Resources
            </h3>
            <p className="text-body">
              Financial advisor coaching, tools, strategies, and conversations
              that push advisors to show up as leaders&mdash;not producers.
            </p>
            <div className="w-full self-end pt-4 lg:pt-0">
              <GenericButton text="Partner With Us" url="#" minWidth="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCarmineCreatesChange;
