import React from "react";
import AppContent from "../../assets/data/app-content.json";
import SpeakerItem from "./speaker-item";
import { Title } from "../common/title";

export type Speaker = {
  name: string;
  profile: string;
  from: string;
};

type Props = {};

const SpeakerList = (props: Props) => {
  return (
    <section
      id="speakers"
      className="flex flex-col items-center justify-center"
    >
      <Title
        title="Speakers"
        className="font-rubik-italic text-6xl md:text-xl lg:text-8xl"
      />
      <div className="flex h-full w-full gap-10 flex-wrap items-center justify-center md:justify-between">
        {AppContent.speakers.map((speaker) => (
          <SpeakerItem key={`${speaker.name}`} speaker={speaker} />
        ))}
      </div>
    </section>
  );
};

export default SpeakerList;
