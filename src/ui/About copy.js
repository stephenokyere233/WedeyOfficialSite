import Downloader from "../Downloader";
import Footer from "../Footer";
import SocialMediaLogos from "../SocialMediaLogos";
import WedeyLogo from "../WedeyLogo";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="grid grid-rows-1 h-sreen">
      <div className="h-20 flex items-center justify-between fixed w-screen bg-white mb-36 ">
        <WedeyLogo />
        <SocialMediaLogos />
        <a href="#contact">Contact</a>
      </div>
      <div
        style={{ backgroundImage: `url(/about-us.jpg)` }}
        className="mt-[150px] bg-contain bg-right bg-no-repeat h-[550px] w-screen"
      >
        <div className="inline-block mt-24">
          <div className="ml-11 mb-2">
            <h3 className="font-bold text-red-500 ">About Us</h3>
          </div>

          <div>
            <h1 className="text-black text-4xl w-1/2 font-bold ml-10 tracking-wide">
              Making Item Delivery From The
              <br /> Market To Your Doorstep A Reality
            </h1>
          </div>
          <div className="mt-5 ml-5">
            <p className="w-1/2 tracking-wide text-lg ml-5">
              As your representatives at major local markets across the country,
              our sole aim is to provide you with premium services from buying,
              packaging and delivering your items from the your market to you.
              <br />
              With the WeDey App your wish will be a reality
            </p>
          </div>

          <div className="flex items-start mt-12 font-bold">
            <Downloader />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 via-yellow-500 to-pink-400 mt-40 h-48 mb-24 flex items-center space-x-64 w-screen overflow-hidden mx-auto">
        <p className="text-white text-lg ml-44">
          <span className="font-bold text-5xl "> 2021 </span>
          <br />
          <br />
          Current users
        </p>
        <p className=" text-white text-lg">
          <span className="font-bold text-5xl">1,320</span>
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; Downloads
        </p>
        <p className=" text-white text-lg">
          <span className="font-bold text-5xl"> 450</span>
          <br />
          <br />
          &nbsp; Reviews
        </p>
      </div>

      <div className="flex items-end justify-end mr-32">
        <h1 className="text-lg font-bold text-red-500">
          What We Offer
          <br />
          <span className="text-4xl font-bold text-stone-800">
            Our Services Are Beyond Compare
          </span>
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(/shot-2.jpg)` }}
        className="bg-contain bg-left bg-no-repeat h-[650px] ml-16"
      >
        <div className="flex items-end justify-end mr-16 mt-10 flex-col">
          <div className="w-[650px] bg-stone-100 h-32 flex items-center px-5 py-[73px] rounded-lg mb-5">
            <img
              src="/payment-2.svg"
              alt="Payment"
              className="h-12 pl-5 pr-5"
            />
            <p className="text-lg tracking-wide">
              <span className="text-lg font-bold text-blue-800">
                Unbeatable Prices:
              </span>
              &nbsp; With our agents at various markets, we do not just buy but
              we bargain on your behalf to get your item at an affordable price
            </p>
          </div>
          <div className="w-[650px] bg-stone-100 h-28 flex items-center px-5 py-[73px] rounded-lg mb-5">
            <img
              src="/delivery.svg"
              alt="Delivery"
              className="h-12 pl-5 pr-5"
            />
            <p className="text-lg tracking-wide">
              <span className="text-lg font-bold text-blue-800">
                Secured Payment:
              </span>
              &nbsp;Transactions made on the app are fast and secured.Also, our
              app supports multiple payments options
            </p>
          </div>
          <div className="w-[650px] bg-stone-100 h-32 flex items-center px-5 py-[73px] rounded-lg">
            <img src="/price.svg" alt="Payment" className="h-12 pl-5 pr-5" />
            <p className="text-lg tracking-wide">
              <span className="text-lg font-bold text-blue-800">
                Instant delivery:
              </span>
              &nbsp; This feature allows you to communicate with our errand
              representative at the market
            </p>
          </div>
        </div>
      </div>
      <div
        id="#features"
        style={{ backgroundImage: `url(/shot-3.jpg)` }}
        className="bg-contain bg-center bg-no-repeat h-[565px] mb-72 mt-28"
      >
        <div className="flex text-start flex-col mt-3 space-y-28 ">
          <div className="ml-20">
            <img src="/list.svg" alt="list" className="h-12 mt-5" />
            <p className="w-72 text-lg tracking-wide h-10">
              <span className="text-lg font-bold text-nowrap">
                Product categories
              </span>
              <br />
              We have a wide range of items grouped into different catogories
              including furniture, electronics, fashion etc
            </p>
          </div>

          <div className="ml-20 ">
            <img src="/chat.png" alt="list" className="h-12 mt-5" />
            <p className="w-72 text-lg tracking-wide h-10">
              <span className="text-lg font-bold text-nowrap">
                Instant messaging
              </span>
              <br />
              This feature allows you to communicate with our errand
              representative at the market
            </p>
          </div>

          <div className="ml-20">
            <img src="/livetrack.png" alt="list" className="h-12 mt-5" />
            <p className="w-80 text-lg tracking-wide h-10">
              <span className="text-lg font-bold text-nowrap">
                Live tracking
              </span>
              <br />
              You can track your order in real-time
            </p>
          </div>
        </div>

        <div className="flex text-end justify-end mb-[1000px]">
          <div>
            <p>
              <span>dhfghdgh</span>
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default About;
