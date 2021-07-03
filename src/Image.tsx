import React from "react";
import { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  className: string;
  alt: string;
  src: string;
}

const Image: React.FC<Props> = ({ className, alt, src, ...rest }) => {
  return <img className={"pr-4 " + className} alt={alt} src={src} {...rest} />;
};

Image.defaultProps = {};

export default Image;
