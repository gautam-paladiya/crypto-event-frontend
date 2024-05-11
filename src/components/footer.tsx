import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative z-10 bg-blue-200">
      {/* <div className="absolute top-0 left-0 w-full h-full border -z-1 backdrop-blur-lg backdrop-filter bg-blue-200 border-zinc-700"></div> */}
      <div className="z-[1000] flex flex-col gap-5  p-5 text-white text-justify backdrop-blur-sm backdrop-filter">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <span>Copyright © 2024 Crypto Expo. All Rights Reserved</span>
          <ul className="flex flex-col md:flex-row gap-5 ">
            <li className="underline underline-offset-2 text-left">
              <Link href="/terms-condition">Terms and Conditions</Link>
            </li>
            <span className="hidden md:block space-x-5">|</span>
            <li className="underline underline-offset-2 text-left">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <p className="text-xl leading-4 font-rubik-italic text-justify">
          Disclaimer: Cryptocurrencies are complex instruments and come with a
          high risk of losing money rapidly due to its volatility. You should
          consider whether you understand how cryptocurrency work and whether
          you can afford to take the high risk of losing your money. This event
          is organised to provide educational content and networking
          opportunities for the virtual asset Industry. This event and our
          company does not involve in any recommendation or investment or
          selling/buying of any financial products. Visitors under the age of 18
          will not be admitted.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
