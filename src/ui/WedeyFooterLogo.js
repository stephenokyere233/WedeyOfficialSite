import { Link } from "react-router-dom";

const WedeyFooterLogo = () => {
  return (
    <div className="flex items-center justify-start mb-2.5 mr-[19px] bg-opacity-5 grayscale">
      <Link to="/#">
        <img
          src="/wedey logo.png"
          alt="Wedey Logo"
          className="h-16 filter-none"
        />
      </Link>
    </div>
  );
};

export default WedeyFooterLogo;
