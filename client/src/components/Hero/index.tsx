import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="mx-4 justify-center flex flex-col h-screen gap-y-6 items-center">
      <div className="text-2xl">
        <span className="mx-2">-</span> WELCOME TO{" "}
        <span className="text-[#F24405]">HAMARAPROJECT</span>
      </div>
      <div className="text-[60px] font-[800] tracking-wider text-center">
        WE ARE REDEFINING PROPERTY <span className="italic">OWNERSHIP</span>{" "}
        THROUGH <span className="text-[#F24405]">DECENTRALIZATION</span>
      </div>
      <div className="flex gap-x-6">
        <Button variant="secondary" title="BUY PROPERTIES"></Button>
        <Button variant="secondary" title="SELL PROPERTIES"></Button>
      </div>
    </div>
  );
};

export default Hero;
