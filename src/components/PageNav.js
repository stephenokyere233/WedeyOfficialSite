import { Link } from "react-router-dom";

const PageNav = () => {
  const navItems = [
    { name: "Home", path: "/#" },
    { name: "About", path: "/about" },
    { name: "Features", path: "#features" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <span className=" hidden lg:flex items-center flex-row text-stone-800 space-x-16 font-lightbold justify-center">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="text-lg hover:transform hover:-translate-y-1 hover:text-blue-500 transition duration-300"
        >
          {item.name}
        </Link>
      ))}
    </span>
  );
};

export default PageNav;
