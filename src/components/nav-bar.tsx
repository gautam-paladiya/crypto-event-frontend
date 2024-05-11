"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import NavList from "./nav-list";
import { cn } from "../utils/cn";
import BuyTicketButton from "./common/buy-ticket-btn";
import { AppContext } from "../providers/app-provider";

type Props = {};

const NavBar = (props: Props) => {
  const appContext = use(AppContext);

  return (
    <header className="z-[1000] max-w-screen top-0 left-0 center fixed w-screen">
      <div className="z-[1000] flex w-full items-center justify-between px-6 xl:px-24 my-2 relative ">
        <a
          href="#home"
          className="relative flex items-center h-full pt-2 space-x-2 group min-w-max"
        >
          <Image
            priority
            quality={100}
            alt="CryptoGetExpo"
            className="rounded-full"
            src="/logo.svg"
            width="300"
            height="40"
          />
        </a>

        <div className="flex items-center space-x-8 ">
          <NavList className="hidden md:flex gap-3 mt-2  md:flex-row" />
        </div>

        <div
          className={cn(
            "z-[1000] ",
            `${
              appContext?.state.isDrawerOpen
                ? " py-4 h-screen absolute left-0 top-[4.4rem] w-48 animate__animated animate__fadeInLeft "
                : "hidden"
            }`
          )}
        >
          <div className="absolute  left-0 z-0 w-full h-full top-4 bg-zinc-900/80 backdrop-blur-lg backdrop-filter"></div>
          {/* <div
            onClick={() =>
              appContext?.updateState({
                ...appContext.state,
                isDrawerOpen: false,
              })
            }
            className="hidden absolute z-[10000] left-[145px] top-4  cursor-pointer text-lg "
          >
            ✕
          </div> */}
          <div className="z-[10000] grid grid-cols-1 w-full place-items-center px-8 text-center ">
            <div className="flex items-center space-x-8 ">
              <NavList />
            </div>
            <BuyTicketButton className="mx-10 my-10 p-2" />
          </div>
        </div>
        <div className="!z-[10000000] flex items-center space-x-2 lg:space-x-8">
          <BuyTicketButton className="hidden md:block" />
          <div
            onClick={() =>
              appContext?.updateState({
                ...appContext.state,
                isDrawerOpen: !appContext?.state.isDrawerOpen,
              })
            }
            className="z-[10000] block md:hidden mt-2 py-1 px-4 w-fit !text-base"
          >
            {appContext?.state.isDrawerOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="z-[10000] w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="z-[10000] w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full border -z-1 backdrop-blur-lg backdrop-filter bg-zinc-900/40 border-zinc-700"></div>
    </header>
  );
};

export default NavBar;
