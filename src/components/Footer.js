import SocialMediaLogos from "../SocialMediaLogos";
import WidthConstraint from "../layout/WidthConstraint";
import WedeyLogo from "./WedeyLogo";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <div className="bg-stone-800 h-[600px] flex items-center ">
      <WidthConstraint className="flex items-center flex-col justify-center gap-10">
        <WedeyLogo className="grayscale scale-[1.1]" />
        <div className="flex flex-col gap-5 items-center justify-center">
          <FooterNav />
          <SocialMediaLogos />
          <p className="text-lg font-semibold text-center text-white">
            &copy; All Rights Reserved 2024
          </p>
        </div>
      </WidthConstraint>
    </div>
  );
};

export default Footer;
