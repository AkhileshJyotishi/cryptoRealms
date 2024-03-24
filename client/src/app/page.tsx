import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import Promotion from "@/components/Promotion";
import Team from "@/components/Team";
import React from "react";

const Main = () => {
  return (
    <div className="bg-black max-w-[1660px] mx-auto flex min-h-screen flex-col gap-y-8 items-center p-2 sm:p-6 lg:p-8">
      <Navbar />
      <Hero />
      <OurWork />
      <Promotion />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Main;
