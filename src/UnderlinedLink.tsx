import React from "react";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: "green";
  children: string;
  className?: string;
}

const UnderlinedLink: React.FC<Props> = ({
  theme,
  children,
  className,
  ...rest
}) => {
  let themeClass = theme === "green" ? " text-primary-300 " : " ";
  return (
    <a
      {...rest}
      className={
        "flex-shrink-0 underline hover:no-underline" + themeClass + className
      }
    >
      {children}
    </a>
  );
};

UnderlinedLink.defaultProps = {};

export default UnderlinedLink;
