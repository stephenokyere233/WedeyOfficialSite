import { Link } from "react-router-dom";

const SocialMediaLogos = () => {
  return (
    <div className="flex justify-center items-center space-x-10 ">
      <Link to="/" data-aos="fade-up" data-aos-duration="200">
        <img
          src="/fb.svg"
          alt="Facebook Logo"
          className="h-10 mt-3 space-x-6 bg-gray-400 p-2 rounded-lg hover:bg-blue-700 transition duration-300"
        />
      </Link>

      <Link
        to="/"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="100"
      >
        <img
          src="/twitter.svg"
          alt="Twitter Logo"
          className="h-[38px] space-x-10 mt-3 p-2 bg-gray-400 rounded-lg hover:bg-blue-500 transition duration-300"
        />
      </Link>
      <Link
        to="/"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="150"
      >
        <img
          src="/instagram.svg"
          alt="Instagram Logo"
          className="h-[38px] space-x-15 mt-2 p-2 bg-gray-400 rounded-lg hover:bg-red-500 transition duration-300"
        />
      </Link>
      <Link
        to="/"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="200"
      >
        <img
          src="/whatsapp.svg"
          alt="Whatsapp Logo"
          className="h-[38px] space-x-10 mt-2 mr-3 p-2 bg-gray-400 rounded-lg hover:bg-green-500 transition duration-300"
        />
      </Link>
    </div>
  );
};

export default SocialMediaLogos;
