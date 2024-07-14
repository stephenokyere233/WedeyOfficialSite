import Footer from "../components/Footer";
import Header from "../components/Header";
import Downloader from "../components/Downloader";
import WidthConstraint from "../layout/WidthConstraint";

const features = [
  {
    imgSrc: "/list.svg",
    altText: "list",
    title: "Product categories",
    description:
      "We have a wide range of items grouped into different categories including furniture, electronics, fashion etc",
  },
  {
    imgSrc: "/chat.png",
    altText: "chat",
    title: "Instant messaging",
    description:
      "This feature allows you to communicate with our errand representative at the market",
  },
  {
    imgSrc: "/livetrack.png",
    altText: "livetrack",
    title: "Live tracking",
    description: "You can track your order in real-time",
  },
  {
    imgSrc: "/cart.png",
    altText: "cart",
    title: "Shopping cart",
    description: "Keep records of items to purchase before cashing-out",
  },
  {
    imgSrc: "/pay.png",
    altText: "pay",
    title: "Payment",
    description:
      "You can pay directly on the app with credit cards, debit cards or mobile money",
  },
  {
    imgSrc: "/review.png",
    altText: "review",
    title: "Ratings and Review",
    description: "Find and leave reviews on products, errand representatives or services",
  },
];

const Features = ({ features }) => {
  return (
    <div className="flex gap-10 flex-col">
      {features.map((feature, index) => (
        <div key={index}>
          <img src={feature.imgSrc} alt={feature.altText} className="h-12 mt-5" />
          <p className="md:max-w-72 text-lg tracking-wide">
            <span className="text-lg font-bold text-nowrap">{feature.title}</span>
            <br />
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div className="">
      <Header showNav />
      <WidthConstraint className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 mt-[10rem]">
        <div className="space-y-6">
          <h3 className="font-bold text-lg text-red-500">About Us</h3>
          <h1 className="text-[32px] font-bold mb-5">
            Making Item Delivery From The
            <br /> Market To Your Doorstep A Reality
          </h1>
          <p className="text-lg md:max-w-[550px]">
            As your representatives at major local markets across the country,
            <br />
            our sole aim is to provide you with premium services from buying, packaging
            and delivering your items from the your market to you.
            <br />
            With the WeDey App your wish will be a reality
          </p>
          <Downloader />
        </div>

        <img src="/about-us.jpg" alt="about us" />
      </WidthConstraint>

      <div className="bg-aboutGradient mt-28 mb-24 flex items-center justify-center py-14 w-screen overflow-hidden mx-auto">
        <WidthConstraint className="w-full">
          <ul className="grid grid-cols-1 lg:grid-cols-3 w-full justify-items-center items-center gap-10">
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
        </WidthConstraint>
      </div>

      <WidthConstraint className="flex flex-col lg:flex-row items-center gap-10 py-[5rem]">
        <img src="/shot-2.jpg" alt="about-us" className="h-[600px]" />

        <div className=" flex-1 space-y-6">
          <h1 className="text-lg font-bold text-red-500">
            What We Offer
            <br />
            <span className="text-4xl font-bold text-stone-800">
              Our Services Are Beyond Compare
            </span>
          </h1>

          <div className="space-y-5">
            <div className=" bg-stone-100  gap-5 flex items-center p-5 lg:p-8 rounded-lg">
              <img src="/payment-2.svg" alt="Payment" className="h-12 " />
              <p className="text-lg tracking-wide">
                <span className="text-lg font-bold text-blue-800">
                  Unbeatable Prices:
                </span>
                &nbsp; With our agents at various markets, we do not just buy but we
                bargain on your behalf to get your item at an affordable price
              </p>
            </div>
            <div className=" bg-stone-100 gap-5 flex items-center p-5 lg:p-8 rounded-lg">
              <img src="/delivery.svg" alt="Delivery" className="h-12 " />
              <p className="text-lg tracking-wide">
                <span className="text-lg font-bold text-blue-800">Secured Payment:</span>
                &nbsp;Transactions made on the app are fast and secured.Also, our app
                supports multiple payments options
              </p>
            </div>
            <div className=" bg-stone-100  gap-5 flex items-center p-5 lg:p-8 rounded-lg">
              <img src="/price.svg" alt="Payment" className="h-12 " />
              <p className="text-lg tracking-wide">
                <span className="text-lg font-bold text-blue-800">Instant delivery:</span>
                &nbsp; This feature allows you to communicate with our errand
                representative at the market
              </p>
            </div>
          </div>
        </div>
      </WidthConstraint>

      <WidthConstraint className="py-[5rem] pb-[10rem]">
        <div id="features">
          <h1 className="text-center text-red-600 font-bold text-lg mb-20 mt-10">
            Features
            <br />
            <span className="text-4xl font-bold text-stone-800 ">
              Digitizing Our Local Markets
            </span>
          </h1>
          <div
            id="#features"
            className=" grid lg:grid-cols-3 justify-items-center gap-10 items-center"
          >
            <Features features={features.slice(0, 3)} />
            <div>
              <img src="/shot-3.jpg " alt="shot-3" className="h-[570px]" />
            </div>
            <Features features={features.slice(3, 6)} />
          </div>
        </div>
      </WidthConstraint>

      <div id="contact">
        <div
          className="bg-center bg-contain h-14 "
          style={{ backgroundImage: `url(/secondCurve.svg)` }}
        />
        <Footer />
      </div>
    </div>
  );
};

export default About;
