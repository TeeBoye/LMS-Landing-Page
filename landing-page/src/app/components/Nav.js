import React from "react";
import Link from "next/link";
import Error404 from "../Error404";

function Nav() {
  return (
    <div className="w-full h-[88px] justify-between border-b pt-4 pr-32 pb-4 pl-32 bg-[#184CD1] text-white border border-[#184CD1] shadow-none flex flex-row justify-centre">
      <div className=" w-[180.25px] h-56 gap-1 p-0.5 flex flex-row">
        <img
          className="lg: w-[52.67px] h-[50.11px]"
          src="/images/logo.png "
          alt="in"
        />
        <div className="w-[114px] h-[42px]">
          <p className="font-Clash font-bold text-[23.58px] leading-none tracking-wider">
            Panthera
          </p>
          <p className="font-Clash font-medium text-[17.68px] leading-none tracking-wide">
            Tech School
          </p>
        </div>
      </div>
      <div className=" h-[40px] pt-2 gap-8 flex flex-row justify-centre">
        <Link href="../Error404">
          <p>Home</p>
        </Link>

        <Link href="../Error404">
          <p className="text-xs opacity-45 pt-[6px]">About Us</p>
        </Link>
        <Link href="../Error404">
          <p className="text-xs opacity-45 pt-[6px]">Courses</p>
        </Link>
        <Link href="../Error404">
          <p className="text-xs opacity-45 pt-[6px]">FAQ</p>
        </Link>
        <Link href="../Error404">
          <p className="text-xs opacity-45 pt-[6px]">Blog</p>
        </Link>
      </div>
      <div className="w-[221px] h-[48px] gap-4 flex flex-row">
        <Link href="../Error404">
          <button
            className="w-[117px] text-[12px] h-[48px] pt-3 pr-6 pb-3 pl-6 
         rounded-[8px] border border-[#184CD1] 
         text-white bg-[#184CD1] hover:bg-[#1A64F7]"
          >
            Sign In
          </button>
        </Link>

        <Link href="../Error404">
          <button className="w-[117px] text-lg h-[48px] pt-3 pr-6 pb-3 pl-6 rounded-[8px]  border-white border-[1px] text-white bg-[#184CD1] hover:bg-[#1A64F7]">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
