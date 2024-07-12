import { Link } from "react-router-dom";

const LinkComponent = () => {
  function handleClick(e) {
    e.stopPropagation();
  }

  return (
    <span
      onClick={handleClick}
      className="flex items-center flex-row text-white space-x-10 font-bold "
    >
      <Link
        to="/#"
        className="hover:transform hover:-translate-y-1 hover:text-blue-600 transition-all duration-200  hover:underline"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="hover:transform hover:-translate-y-1 hover:text-blue-600 transition-all duration-200  hover:underline"
      >
        About
      </Link>

      <Link
        className="hover:transform hover:-translate-y-1 hover:text-blue-600 transition-all duration-200  hover:underline"
        to="/about/#features"
      >
        Features
      </Link>
      <a
        href="#contact"
        className="hover:transform hover:-translate-y-1 hover:text-blue-600 transition-all duration-200  hover:underline"
      >
        Contact
      </a>
    </span>
  );
};

export default LinkComponent;
