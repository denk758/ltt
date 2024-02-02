import { Backdrop, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { LttContext } from "../context/ltt.context";

export const HomePage: React.FC = () => {
  const { getQuote } = useContext(LttContext);

  getQuote("hello world!");
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
