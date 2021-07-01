import React from "react";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: "white" | "black" | "green";
  children: string;
}

const RoundedLink: React.FC<Props> = ({ theme, children, ...rest }) => {
  let themeClasses =
    theme === "white"
      ? "text-white border-white "
      : theme === "green"
      ? "text-white border-primary-300 bg-primary-300 "
      : "text-black border-black ";

  return (
    <a
      {...rest}
      className={
        "flex-shrink-0 px-4 py-1.75 text-sm border font-semibold rounded-full " +
        themeClasses
      }
    >
      {children}
    </a>
  );
};

RoundedLink.defaultProps = {
  theme: "black",
};

export default RoundedLink;
