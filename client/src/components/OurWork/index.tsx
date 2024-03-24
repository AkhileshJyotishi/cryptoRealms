import Image from "next/image";
import React from "react";

const OurWork = () => {
  return (
    <div className="flex w-[90%] mx-auto flex-col gap-y-11  my-10">
      <div className=" flex gap-x-6 flex-wrap justify-between items-center gap-y-4">
        <div className="min-w-[160px] flex w-[25%] text-2xl sm:text-4xl md:text-4xl font-[400]">
          <span className="mx-2 font-[700]">-</span>
          <p>The work we perform</p>
        </div>
        <div className="min-w-[160px] w-[60%] text-xs sm:text-sm font-light mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing
        </div>
      </div>
      <div className="flex gap-x-4 items-center justify-center">
        <div>
          <Image
            src={
              "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI="
            }
            alt="Logo"
            width={500}
            height={500}
            className="w-32 h-32  rounded-full"
          />
        </div>
        <div className="justify-start flex gap-x-14 items-center">
          <div className="hidden sm:block  h-[40px] border border-white/80"></div>
          <Image
            src={
              "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI="
            }
            alt="Logo"
            width={500}
            height={500}
            className="w-32 h-32 rounded-full"
          />
          <div className="max-w-[45%] text-3xl sm:text-[44px] leading-[44px] font-[700]">
            {" "}
            HAMARA PROJECT
          </div>
        </div>
      </div>
      <div className="text-center w-[80%] font-[400] mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </div>
    </div>
  );
};

export default OurWork;
