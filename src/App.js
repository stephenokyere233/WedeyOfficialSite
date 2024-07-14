import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
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
