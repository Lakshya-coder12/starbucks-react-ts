import React, { ImgHTMLAttributes } from "react";
import H3 from "./H3";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  heading: string;
  children: React.ReactNode;
  alt: string;
  src: string;
}

const StepImageComponent: React.FC<Props> = ({
  className,
  heading,
  children,
  alt,
  src,
  ...rest
}) => {
  return (
    <div className={"flex " + className}>
      <img className="w-30 h-28 pr-4" alt={alt} src={src} {...rest} />
      <div>
        <H3>{heading}</H3>
        <div className="pt-4 text-sm pb-8">{children}</div>
      </div>
    </div>
  );
};

StepImageComponent.defaultProps = {
  className: "",
};

export default StepImageComponent;
