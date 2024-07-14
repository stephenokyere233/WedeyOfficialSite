import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const WedeyLogo = ({ className }) => {
  return (
    <Link to="/#" className="">
      <img src="/wedey logo.png" alt="Wedey Logo" className={cn("w-[70px]", className)} />
    </Link>
  );
};

export default WedeyLogo;
