import { Link } from "react-router-dom";

const PageNav = () => {
  return (
    <span className="flex items-center flex-row text-stone-800 space-x-16 font-lightbold justify-center">
      <Link
        to="/#"
        className="text-lg hover:transform hover:-translate-y-1 hover:text-blue-500 transition duration-300 "
      >
        Home
      </Link>

      <Link
        to="/about"
        className="text-lg hover:transform hover:-translate-y-1 hover:text-blue-500 transition duration-300"
      >
        About
      </Link>

      <a
        href="#features"
        className="transition duration-300 hover:transform hover:-translate-y-1 hover:text-blue-500"
      >
        Features
      </a>
      <a
        href="#contact"
        className="hover:transform hover:-translate-y-1 hover:text-blue-500 transition duration-300"
      >
        Contact
      </a>
    </span>
  );
};

export default PageNav;
