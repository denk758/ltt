import { useContext, useMemo } from "react";
import { LttContext } from "../context/ltt.context";

export const HomePage: React.FC = () => {
  const { getQuote } = useContext(LttContext);

  const quote = useMemo(() => getQuote(), []);
  return <>{quote}</>;
};
