import { Link } from "react-router-dom";

const SocialMediaLogos = ({ isNav = false }) => {
  const links = [
    {
      name: "Facebook",
      link: "/",
      icon: "/fb.svg",
    },
    {
      name: "Twitter",
      link: "/",
      icon: "/twitter.svg",
    },
    {
      name: "Instagram",
      link: "/",
      icon: "/instagram.svg",
    },
    {
      name: "Whatsapp",
      link: "/",
      icon: "/whatsapp.svg",
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
            className={`h-10 mt-3 space-x-6 bg-[#00000038] transition-colors duration-300 p-2 rounded-lg hover:${getHoverColor(
              social.name
            )} border-none`}
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
