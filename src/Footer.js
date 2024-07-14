import WedeyFooterLogo from "./ui/WedeyFooterLogo";
import HomeLinks from "./ui/HomeLinks";
import SocialMediaLogos from "./SocialMediaLogos";

const Footer = () => {
  return (
    <div className="bg-stone-800 h-[600px] flex items-center flex-col justify-center space-y-24">
      <WedeyFooterLogo />
      <HomeLinks />
      <SocialMediaLogos />

      <p className="text-lg font-semibold text-center text-white">
        &copy; All Rights Reserved 2024
      </p>
    </div>
  );
};

export default Footer;
