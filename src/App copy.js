import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./ui/Homepage";
import AppLayout from "./ui/AppLayout";
import About from "./ui/About";
import Features from "./ui/Features";
import Contact from "./ui/Contact";
import WedeyLogo from "./WedeyLogo";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/#",
          element: <WedeyLogo />,
        },
      ],
    },
    {
      path: "/wedey",
      element: <AppLayout />,
      children: [
        {
          path: "/wedey/about",
          element: <About />,
        },
        {
          path: "/wedey/features",
          element: <Features />,
        },
        {
          path: "/wedey/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
