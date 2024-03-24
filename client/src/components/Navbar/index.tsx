"use client";
import Link from "next/link";
import React from "react";

const NavbarLink = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Buy",
    path: "#",
  },
  {
    name: "Sell",
    path: "#",
  },
  {
    name: "Rent",
    path: "#",
  },
];

const walletAddress = "0xiedh3hduhdbuj42423ny7xny7nyn72n73exxnb";

const connectWallet = () => {};

const Navbar = () => {
  return (
    <div className="z-50 max-w-[1660px]  w-[80%] fixed top-[40px]  flex justify-between items-center px-8 py-3 bg-[#ffffff49] rounded-full border-[1px] border-[#fff] backdrop-blur-[6px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)]">
      <div className="text-white font-bold">Logo Here</div>
      <div className="bg-white rounded-full w-[36%] flex gap-4 justify-around text-black px-4 py-1">
        {NavbarLink.map((link, ind) => {
          return (
            <Link key={ind} href={link.path}>
              {link.name}
            </Link>
          );
        })}
      </div>
      {walletAddress ? (
        <div className="border border-white text-md font-semibold text-white px-2 py-1 rounded-full ">
          {walletAddress.substring(0, 7) +
            "...." +
            walletAddress.substring(
              walletAddress.length - 4,
              walletAddress.length - 1
            )}{" "}
        </div>
      ) : (
        <button
          className={
            "cursor-pointer text-md font-medium hover:bg-white hover:text-black text-white border border-white px-2 py-1 rounded-full"
          }
          onClick={() => connectWallet()}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default Navbar;
