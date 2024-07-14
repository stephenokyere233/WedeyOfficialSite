import Downloader from "../Downloader";
import SocialMediaLogos from "../SocialMediaLogos";
import WedeyLogo from "../WedeyLogo";
import Contact from "./Contact";
import PageNav from "./PageNav";

const About = () => {
  return (
    <div className="grid grid-rows-1 h-sreen">
      <div className="h-20 flex items-center justify-between fixed top-0 left-0 z-50 w-screen bg-white mb-36 ">
        <WedeyLogo />
        <PageNav />
        <SocialMediaLogos isNav />
      </div>
      {/* <div
        className="bg-contain bg-center h-60 w-full mt-[px]"
        style={{ backgroundImage: `url(/aboutCurve.svg)` }}
      ></div> */}

      <div className="flex items-center mt-32">
        <div className="ml-20">
          <h3 className="font-bold text-lg text-red-500 mb-1 ml-1.5">About Us</h3>
          <h1 className="text-[32px] font-bold mb-5">
            Making Item Delivery From The
            <br /> Market To Your Doorstep A Reality
          </h1>
          <p className="text-lg w-[600px] mb-5">
            As your representatives at major local markets across the country,
            <br />
            our sole aim is to provide you with premium services from buying, packaging
            and delivering your items from the your market to you.
            <br />
            With the WeDey App your wish will be a reality
          </p>
          <Downloader />
        </div>
        <div className="mr">
          <img src="/about-us.jpg" alt="about us" />
        </div>
      </div>

      <div className="bg-aboutGradient mt-28 mb-24 flex items-center justify-center py-14 px-10 w-screen overflow-hidden mx-auto">
        <ul className="flex items-center space-x-44">
          <li className="text-white text-lg font-semibold">
            <span className="font-bold text-5xl">2021</span>
            <br /> <br />
            Current users
          </li>
          <li className="space-y-2 text-white text-lg font-semibold">
            <span className="font-bold text-5xl">1,320</span>
            <br /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Downloads
          </li>
          <li className="text-white text-lg font-semibold">
            <span className="font-bold text-5xl">450</span>
            <br /> <br />
            &nbsp;&nbsp;Reviews
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-10">
        <di className="ml-16">
          <img src="/shot-2.jpg" alt="about-us" className="h-[600px]" />
        </di>
        <div>
          <div className="mb-6">
            <h1 className="text-lg font-bold text-red-500">
              What We Offer
              <br />
              <span className="text-4xl font-bold text-stone-800">
                Our Services Are Beyond Compare
              </span>
            </h1>
          </div>

          <div className="w-[650px] bg-stone-100 h-32 flex items-center px-5 py-[68px] rounded-lg mb-5">
            <img src="/payment-2.svg" alt="Payment" className="h-12 pl-5 pr-5" />
            <p className="text-lg tracking-wide">
              <span className="text-lg font-bold text-blue-800">Unbeatable Prices:</span>
              &nbsp; With our agents at various markets, we do not just buy but we bargain
              on your behalf to get your item at an affordable price
            </p>
          </div>
          <div className="w-[650px] bg-stone-100 h-28 flex items-center px-5 py-[68px] rounded-lg mb-5">
            <img src="/delivery.svg" alt="Delivery" className="h-12 pl-5 pr-5" />
            <p className="text-lg tracking-wide">
              <span className="text-lg font-bold text-blue-800">Secured Payment:</span>
              &nbsp;Transactions made on the app are fast and secured.Also, our app
              supports multiple payments options
            </p>
          </div>
          <div className="w-[650px] bg-stone-100 h-32 flex items-center px-5 py-[68px] rounded-lg">
            <img src="/price.svg" alt="Payment" className="h-12 pl-5 pr-5" />
            <p className="text-lg tracking-wide">
              <span className="text-lg font-bold text-blue-800">Instant delivery:</span>
              &nbsp; This feature allows you to communicate with our errand representative
              at the market
            </p>
          </div>
        </div>
      </div>

      <div className="mb-44 mt-20" id="features">
        <h1 className="text-center text-red-600 font-bold text-lg mb-20 mt-10">
          Features
          <br />
          <span className="text-4xl font-bold text-stone-800 ">
            Digitizing Our Local Markets
          </span>
        </h1>
        <div id="#features" className=" flex items-center justify-between ">
          <div className="flex flex-col space-y-28 ">
            <div className="ml-20">
              <img src="/list.svg" alt="list" className="h-12 mt-5" />
              <p className="w-72 text-lg tracking-wide h-10">
                <span className="text-lg font-bold text-nowrap">Product categories</span>
                <br />
                We have a wide range of items grouped into different catogories including
                furniture, electronics, fashion etc
              </p>
            </div>

            <div className="ml-20 ">
              <img src="/chat.png" alt="list" className="h-12 mt-5" />
              <p className="w-72 text-lg tracking-wide h-10">
                <span className="text-lg font-bold text-nowrap">Instant messaging</span>
                <br />
                This feature allows you to communicate with our errand representative at
                the market
              </p>
            </div>

            <div className="ml-20">
              <img src="/livetrack.png" alt="list" className="h-12 mt-5" />
              <p className="w-80 text-lg tracking-wide h-10">
                <span className="text-lg font-bold text-nowrap">Live tracking</span>
                <br />
                You can track your order in real-time
              </p>
            </div>
          </div>

          <div>
            <img src="/shot-3.jpg " alt="shot-3" className="h-[570px]" />
          </div>

          <div className="flex flex-col space-y-28">
            <div className="ml-20">
              <img src="/cart.png" alt="list" className="h-12 mt-5" />
              <p className="w-72 text-lg tracking-wide h-10">
                <span className="text-lg font-bold text-nowrap">Shopping cart</span>
                <br />
                Keep records of items to purchase before cashing-out
              </p>
            </div>

            <div className="ml-20 ">
              <img src="/pay.png" alt="list" className="h-12 mt-5" />
              <p className="w-72 text-lg tracking-wide h-10">
                <span className="text-lg font-bold text-nowrap">Payment</span>
                <br />
                You can pay diretly on the app with credit cards, debit cards or mobile
                money
              </p>
            </div>

            <div className="ml-20">
              <img src="/review.png" alt="list" className="h-12 mt-5" />
              <p className="w-80 text-lg tracking-wide h-10">
                <span className="text-lg font-bold text-nowrap">Ratings and Review</span>
                <br />
                Find and leave reviews on products, errand representatives or services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-center bg-contain h-14 "
        style={{ backgroundImage: `url(/secondCurve.svg)` }}
      ></div>

      <Contact />
    </div>
  );
};

export default About;
