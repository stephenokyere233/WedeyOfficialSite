import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <nav className="flex items-center flex-row text-white space-x-10 font-bold ">
      <Link
        to="/#"
        data-aos="fade-right"
        data-aos-duration="300"
        className="hover:transform hover:-translate-y-1 hover:text-blue-600 transition-all duration-200  hover:underline"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="hover:transform hover:-translate-y-1 hover:text-blue-600 transition-all duration-200  hover:underline"
        data-aos="fade"
        data-aos-duration="300"
      >
        About
      </Link>

      <a
        href="/about#features"
        className="hover:transform hover:-translate-y-1 hover:text-blue-600 transition-all duration-200  hover:underline"
        data-aos="fade-left"
        data-aos-duration="300"
      >
        Features
      </a>
    </nav>
  );
};

export default FooterNav;
