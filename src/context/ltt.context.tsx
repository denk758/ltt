import React, { PropsWithChildren, createContext } from "react";
import { getResponses } from "../utils/responses.util";

interface LttContextProviderProps extends PropsWithChildren { }

interface LttContextProps {
  getQuote: (prompt: string) => Promise<string>;
}

export const LttContext = createContext<LttContextProps>({} as LttContextProps);

export const LttContextProvider: React.FC<LttContextProviderProps> = (props) => {
  const { children } = props;
  const responses = getResponses();
  const getQuote = async (prompt: string) => {

    return Promise.resolve("result")
  }
 
  return (
    <LttContext.Provider
      value={{
        getQuote
      }}
    >
      {children}
    </LttContext.Provider>
  );
};