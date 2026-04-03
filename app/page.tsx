import Image from "next/image";
import Hero from "./home/sections/Hero";
import FeaturedOn from "./home/sections/FeaturedOn";
import MeetCarmineCorino from "./home/sections/MeetCarmineCorino";
import AboutYourLife from "./home/sections/AboutYourLife";
import HowCarmineCreatesChange from "./home/sections/HowCarmineCreatesChange";

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
