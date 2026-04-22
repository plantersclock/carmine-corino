import Image from "next/image";
import type { Metadata } from "next";
import Hero from "./home/sections/Hero";
import FeaturedOn from "./home/sections/FeaturedOn";
import MeetCarmineCorino from "./home/sections/MeetCarmineCorino";
import AboutYourLife from "./home/sections/AboutYourLife";
import HowCarmineCreatesChange from "./home/sections/HowCarmineCreatesChange";

export const metadata: Metadata = {
  openGraph: {
    images: ["/OG%20Image_Home.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OG%20Image_Home.png"],
  },
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturedOn />
      <MeetCarmineCorino />
      <AboutYourLife />
      <HowCarmineCreatesChange />
    </div>
  );
}
