import WedeyLogo from "../WedeyLogo";
import Downloader from "../Downloader";
import Footer from "../Footer";
import TextRotator from "./TextRotator";
import SocialMediaLogos from "../SocialMediaLogos";

const HomePage = () => {
  // hover:from-pink-500 hover:to-yellow-500
  // from-yellow-500  via-purple-500 to-orange-400

  return (
    <div className="grid grid-rows-[auto_1fr_auto] bg-size-200 w-screen bg-linearGradient animate-gradient z-40 overflow-x-hidden transition duration-300">
      <div className="h-20 flex items-center justify-between fixed top-0 left-0 w-screen z-50">
        <WedeyLogo />
        <SocialMediaLogos isNav />
      </div>

      <div className="flex items-center space-x-10 mt-16 overflow-x-hidden">
        <div className="w-[510px] space-y-6 ml-16 py-auto ">
          <span>
            <TextRotator />
          </span>

          <h1 className="text-white text-[52px] font-bold tracking-normal">
            WE BRINGING THE LOCAL MARKETS TO YOU
          </h1>
          <p className="text-lg text-white tracking-normal w-[510px]">
            No need to go to the market because WeDey there. Watch remotely as we shop
            your market list live & instantly deliver to you same day
          </p>
          <div className="ml-1.5">
            <span className="mb-28">
              <Downloader />
            </span>
          </div>
        </div>
        <div className="mr-16 mt-10">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
