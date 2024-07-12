import { Link } from "react-router-dom";

const SocialMediaLogos = () => {
  return (
    <div className="flex justify-center items-center space-x-8 mr-24 ">
      <Link to="/" data-aos="fade-down" data-aos-duration="400">
        <img
          src="/fb.svg"
          alt="Facebook Logo"
          className="h-10 mt-3 space-x-6 bg-[#00000038] transition-colors duration-300  p-2 rounded-lg hover:bg-blue-700 border-none"
        />
      </Link>

      <Link
        to="/"
        data-aos="fade-down"
        data-aos-duration="400"
        data-aos-delay="100"
      >
        <img
          src="/twitter.svg"
          alt="Twitter Logo"
          className="h-10 space-x-10 mt-3 transition-colors duration-300 p-2 bg-[#00000038] rounded-lg hover:bg-blue-500"
        />
      </Link>
      <Link
        to="/"
        data-aos="fade-down"
        data-aos-duration="400"
        data-aos-delay="200"
      >
        <img
          src="/instagram.svg"
          alt="Instagram Logo"
          className="h-10 space-x-15 mt-2 transition-colors duration-300 p-2 bg-[#00000038] rounded-lg hover:bg-red-500"
        />
      </Link>
      <Link
        to="/"
        data-aos="fade-down"
        data-aos-duration="400"
        data-aos-delay="400"
      >
        <img
          src="/whatsapp.svg"
          alt="Whatsapp Logo"
          className="h-10 space-x-10 mt-2 mr-3 p-2 transition-colors duration-300 bg-[#00000038] rounded-lg hover:bg-green-500"
        />
      </Link>
    </div>
  );
};

export default SocialMediaLogos;
