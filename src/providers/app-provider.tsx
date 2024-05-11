"use client";

import React, { createContext, useState } from "react";

export type APP_CONTEXT = {
  state: {
    isDrawerOpen: boolean;
  };
  updateState: (prevState: APP_CONTEXT["state"]) => void;
};

export const InitialAppContext = {
  state: {
    isDrawerOpen: false,
  },
};

type Props = {
  children: React.ReactNode;
};

export const AppContext = createContext<APP_CONTEXT | null>(null);

export const AppProvider = ({ children }: Props) => {
  const [state, setState] = useState(InitialAppContext.state);
  const updateState = (updatedState: APP_CONTEXT["state"]) => {
    setState(updatedState);
  };
  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};
