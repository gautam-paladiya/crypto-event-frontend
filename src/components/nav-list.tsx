import React from "react";
import { cn } from "../utils/cn";

type Props = {
  className?: string;
};

const NavList = ({ className }: Props) => {
  return (
    <span className={cn("flex md:hidden flex-col gap-3 mt-2  ", className)}>
      <a
        className="animate-fade-in min-w-fit flex  text-left shadow-sm  px-4 py-2   hover:border hover:border-zinc-700/50 h-fit hover:bg-zinc-700/50 border border-black/0  hover:shadow-2xl hover:shadow-gray-900 hover:bg-opacity-70 rounded-lg "
        href="#home"
      >
        <div className="relative w-fit">
          <div className="min-w-[50x]">Home</div>
        </div>
      </a>
      <a
        className="animate-fade-in min-w-fit flex  text-left shadow-sm  px-4 py-2   hover:border hover:border-zinc-700/50 h-fit hover:bg-zinc-700/50 border border-black/0  hover:shadow-2xl hover:shadow-gray-900 hover:bg-opacity-70 rounded-lg "
        href="#speakers"
      >
        <div className="relative w-fit">
          <div className="min-w-[50x]">Speakers</div>
        </div>
      </a>
      <a
        className="animate-fade-in min-w-fit flex  text-left shadow-sm  px-4 py-2   hover:border hover:border-zinc-700/50 h-fit hover:bg-zinc-700/50  border border-black/0 hover:shadow-2xl hover:shadow-gray-900 hover:bg-opacity-70 rounded-lg "
        href="#sponsors"
      >
        <div className="relative w-fit">
          <div className="min-w-[100x] text-center">Sponsors</div>
          <span className="hidden  absolute top-[-8px] right-[-20px] lg:top-[-5px] lg:right-[-45px] inline-flex items-center   px-2   justify-center gap-1  text-purple-200 rounded-full bg-purple-500/90 border border-purple-300  text-xs">
            New
          </span>
        </div>
      </a>
      <a
        className="animate-fade-in min-w-fit flex  text-left shadow-sm  px-4 py-2  hover:border hover:border-zinc-700/50 h-fit hover:bg-zinc-700/50 border border-black/0  hover:shadow-2xl hover:shadow-gray-900 hover:bg-opacity-70 rounded-lg "
        href="/copilot-ai"
      >
        <div className="relative w-fit">
          <div className="min-w-[50x]">About </div>
          <span className="hidden  absolute top-[-8px] right-[-20px] lg:top-[-5px] lg:right-[-35px] inline-flex items-center   px-2   justify-center gap-1  text-white rounded-full bg-yellow-500/90 border border-yellow-300  text-xs">
            AI
          </span>
        </div>
      </a>
      <a
        className="hidden h-10  border border-zinc-700/0  hover:border hover:border-zinc-300/70 text-white px-3 py-1 rounded-md"
        href="/teams-signup"
      >
        <span className=" flex items-center relative">
          <span className=" text-sm lg:text-base  font-medium text-white w-[105px]">
            Teams Signup
          </span>
        </span>
      </a>
    </span>
  );
};

export default NavList;
