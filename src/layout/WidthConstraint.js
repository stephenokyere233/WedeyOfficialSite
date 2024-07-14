import React from "react";
import { cn } from "../utils/cn";

const WidthConstraint = ({ children, className }) => {
  return <div className={cn("max-w-[1200px] px-5 mx-auto", className)}>{children}</div>;
};

export default WidthConstraint;
