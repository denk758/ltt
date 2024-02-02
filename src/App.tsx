import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home.page";
import { LttContextProvider } from "./context/ltt.context";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <HomePage />,
    },
  ]);
  return (
    <LttContextProvider>
      <RouterProvider router={router} />
    </LttContextProvider>
  );
}

export default App;
