import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./ui/Homepage";
import AppLayout from "./ui/AppLayout";
import About from "./ui/About";
import Aos from "aos";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "linear",
      once: false,
      startEvent: "scroll",
    });
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
