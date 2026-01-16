import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";
import HowItWorks from "@/components/home/HowItWorks";
import Instructors from "@/components/home/Instructors";
import NewsLetter from "@/components/home/NewsLetter";
import PopularCategories from "@/components/home/PopularCategories";
import Testimonials from "@/components/home/Testimonials";
import { Bentham } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <PopularCategories />
      <Instructors />
      <Featured />
      <Testimonials />
      <NewsLetter />
    </>
  );
}
