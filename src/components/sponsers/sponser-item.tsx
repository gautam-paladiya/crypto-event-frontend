import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { Sponser } from "./sponser-list";
import Image from "next/image";

type Props = {
  sponser: Sponser;
};

const SponserItem = ({ sponser }: Props) => {
  return (
    <div className="h-[25rem] w-80 flex items-center justify-center ">
      <PinContainer title={sponser.title} href={sponser.link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          {/* <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{sponser.title}</span>
          </div> */}

          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            {/* <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full"> */}
            <Image
              src={`/sponsors/${sponser.logo}`}
              width={200}
              height={100}
              alt={sponser.title}
              className="object-contain m-auto"
              //   className="rounded-full"
            />
            {/* <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-3xl text-slate-100">
              {sponser.title}
            </h3> */}
            {/* </div> */}
          </div>
          <h3 className="max-w-xs !pt-4 !m-0 font-bold  text-2xl text-slate-100 text-center">
            {sponser.title}
          </h3>
        </div>
      </PinContainer>
    </div>
  );
};

export default SponserItem;
