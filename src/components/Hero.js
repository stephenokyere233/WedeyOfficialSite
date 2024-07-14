import Downloader from "./Downloader";
import WidthConstraint from "../layout/WidthConstraint";
import TextRotator from "./TextRotator";

const Hero = () => {
  return (
    <WidthConstraint className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 pt-32">
      <div className="space-y-6 md:pt-20 text-center md:text-start">
        <TextRotator />
        <h1 className="text-white text-[52px] leading-[1.2em] font-bold">
          WE BRINGING THE LOCAL MARKETS TO YOU
        </h1>
        <p className="text-lg text-white md:max-w-[510px]">
          No need to go to the market because WeDey there. Watch remotely as we shop your
          market list live & instantly deliver to you same day
        </p>
        <Downloader />
      </div>
      <img src="/hero.png" alt="hero" className="" />
    </WidthConstraint>
  );
};

export default Hero;
