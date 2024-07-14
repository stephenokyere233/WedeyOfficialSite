import React from "react";
import WedeyLogo from "./WedeyLogo";
import PageNav from "./PageNav";
import SocialMediaLogos from "../SocialMediaLogos";
import WidthConstraint from "../layout/WidthConstraint";
import { cn } from "../utils/cn";

const Header = ({ showNav = false }) => {
  return (
    <header className={cn("fixed top-0 z-50 w-screen py-4", showNav && "bg-white")}>
      <WidthConstraint className="flex items-center justify-between">
        <WedeyLogo />
        {showNav && <PageNav />}
        <SocialMediaLogos isNav />
      </WidthConstraint>
    </header>
  );
};

export default Header;
