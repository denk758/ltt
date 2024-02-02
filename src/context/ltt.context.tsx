import React, { PropsWithChildren, createContext } from "react";
import { responses } from "../constants/responses";

interface LttContextProviderProps extends PropsWithChildren {}

interface LttContextProps {
  getQuote: () => string;
}

export const LttContext = createContext<LttContextProps>({} as LttContextProps);

export const LttContextProvider: React.FC<LttContextProviderProps> = (
  props
) => {
  const { children } = props;
  const getQuote = () => {
    const quote = responses[Math.floor(Math.random() * responses.length)];
    return quote;
  };

  return (
    <LttContext.Provider
      value={{
        getQuote,
      }}
    >
      {children}
    </LttContext.Provider>
  );
};
