import React from "react";
import { cn } from "../../utils/cn";

type Props = {
  className?: string;
};

const BuyTicketButton = ({ className }: Props) => {
  return (
    <button
      className={cn(
        "z-[10000] bg-black bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white p-2 border-4 dark:border-slate-800",
        className
      )}
    >
      Buy Tickets
    </button>
  );
};

export default BuyTicketButton;
