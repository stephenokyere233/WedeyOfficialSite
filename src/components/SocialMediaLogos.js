import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const SocialMediaLogos = ({ isNav = false }) => {
  const links = [
    {
      name: "Facebook",
      link: "/",
      icon: "/fb.svg",
      color: "hover:bg-blue-700",
    },
    {
      name: "Twitter",
      link: "/",
      icon: "/twitter.svg",
      color: "hover:bg-blue-500",
    },
    {
      name: "Instagram",
      link: "/",
      icon: "/instagram.svg",
      color: "hover:bg-red-500",
    },
    {
      name: "Whatsapp",
      link: "/",
      icon: "/whatsapp.svg",
      color: "hover:bg-green-500",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-8">
      {links.map((social, index) => (
        <Link
          to={social.link}
          data-aos={isNav ? "fade-up" : "fade-down"}
          data-aos-duration="400"
          data-aos-delay={index * 100}
          key={social.name}
        >
          <img
            src={social.icon}
            alt={`${social.name} Logo`}
            className={cn(
              social.color,
              "h-10 mt-3 space-x-6 bg-[#00000038] transition-colors duration-300 p-2 rounded-lg border-none"
            )}
          />
        </Link>
      ))}
    </div>
  );
};

const getHoverColor = (name) => {
  switch (name) {
    case "Facebook":
      return "bg-blue-700";
    case "Twitter":
      return "bg-blue-500";
    case "Instagram":
      return "bg-red-500";
    case "Whatsapp":
      return "bg-green-500";
    default:
      return "";
  }
};

export default SocialMediaLogos;
