import React from "react";
import SponserItem from "./sponser-item";
import { Title } from "../common/title";
import AppContent from "../../assets/data/app-content.json";

type Props = {};

export type Sponser = {
  title: string;
  logo: string;
  link: string;
};

const SponserList = (props: Props) => {
  return (
    <section
      className="flex flex-col items-center justify-center mt-32"
      id="sponsors"
    >
      <Title
        title="Sponsers"
        className="font-rubik-italic text-6xl md:text-xl lg:text-8xl"
      />
      <div className="flex h-full w-full flex-wrap items-center justify-center md:justify-between">
        {AppContent.sponsors.map((sponser) => (
          <SponserItem key={`${sponser.title}`} sponser={sponser} />
        ))}
      </div>
    </section>
  );
};

export default SponserList;
