import React, { use } from "react";
import { cn } from "../utils/cn";
import { AppContext } from "../providers/app-provider";

type Props = {
  className?: string;
};

const navListItems = [
  { title: "Home", href: "#home" },
  { title: "Speakers", href: "#speakers" },
  { title: "Sponsors", href: "#sponsors" },
  { title: "AboutUs", href: "#aboutus" },
];

const NavList = ({ className }: Props) => {
  const appContext = use(AppContext);

  return (
    <span className={cn("flex md:hidden flex-col gap-3 mt-2  ", className)}>
      {navListItems.map((navItem) => (
        <a
          key={navItem.href}
          onClick={() => {
            appContext?.updateState({
              ...appContext.state,
              isDrawerOpen: false,
            });
          }}
          className="animate-fade-in min-w-fit flex  text-left shadow-sm  px-4 py-2   hover:border hover:border-zinc-700/50 h-fit hover:bg-zinc-700/50 border border-black/0  hover:shadow-2xl hover:shadow-gray-900 hover:bg-opacity-70 rounded-lg "
          href={navItem.href}
        >
          <div className="relative w-fit">
            <div className="min-w-[50x]">{navItem.title}</div>
          </div>
        </a>
      ))}
    </span>
  );
};

export default NavList;
