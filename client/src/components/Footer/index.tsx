import Image from "next/image";
import React from "react";
import github from "@/assets/Github.png";
import Link from "next/link";

const FooterLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sell",
    path: "#",
  },
  {
    name: "Rent",
    path: "#",
  },
  {
    name: "Buy",
    path: "/properties",
  },
  {
    name: "My Properties",
    path: "/dashboard",
  },
];

const Footer = () => {
  return (
    <div className="p-2 max-w-[1440px] w-[100%] flex items-center gap-4 justify-center my-10 sm:my-16">
      <Image
        src={
          "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI="
        }
        alt="Logo"
        width={500}
        height={500}
        className="w-32 h-32 rounded-full"
      />
      <div className="max-w-[45%] text-[48px] font-[700]"> HAMARA PROJECT</div>
      <div className="hidden sm:block  h-[40px] border border-white/80"></div>
      <div className="flex min-w-[10%] flex-col gap-y-[1px] px-4">
        {FooterLinks.map((link, ind) => {
          return (
            <Link key={ind} href={link.path} className="font-[600] uppercase">
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="hidden sm:block  h-[40px] border border-white/80"></div>
      <div className="flex items-center gap-2">
        <Image
          src={github}
          alt="Logo"
          width={500}
          height={500}
          className="w-8 h-8 rounded-full"
        />
        <Link
          href={"https://github.com/AkhileshJyotishi/sBTCEstate"}
          className="font-[500] tracking-wider text-xl"
        >
          GITHUB
        </Link>
      </div>
    </div>
  );
};

export default Footer;
