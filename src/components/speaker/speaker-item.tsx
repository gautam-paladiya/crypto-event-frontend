import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import { Speaker } from "./speaker-list";

type Props = {
  speaker: Speaker;
};

const SpeakerItem = ({ speaker }: Props) => {
  return (
    <div className="border place-items-center border-white/[0.2] dark:border-white/[0.2] flex flex-col w-80 items-center p-5 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

      <EvervaultCard text={`/speakers/${speaker.profile}`} />

      <h2 className="dark:text-white cursor-pointer text-white mt-4 text-xl font-light text-center">
        {speaker.name}
      </h2>
      <p className="border text-center font-rubik-italic font-bold text-xl cursor-pointer dark:border-white/[0.2] border-white/[0.2] rounded-full mt-4 text-white dark:text-white px-2 py-0.5">
        {speaker.from}
      </p>
    </div>
  );
};

export default SpeakerItem;
