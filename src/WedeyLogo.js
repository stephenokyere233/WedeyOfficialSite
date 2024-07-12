import { Link } from "react-router-dom";

const WedeyLogo = () => {
  return (
    <div className="flex items-center mb-0 ml-[94px] z-50">
      <Link to="/#" className="">
        <img src="/wedey logo.png" alt="Wedey Logo" className="h-14" />
      </Link>
    </div>
  );
};

export default WedeyLogo;
