import React from "react";
import StepImageComponent from "./StepImageComponent";

interface Props {
  className?: string;
  h3: string;
  children: React.ReactNode;
  src: string;
  alt: string;
}

const StarRewardCategory: React.FC<Props> = ({
  className,
  h3,
  children,
  src,
  alt,
}) => {
  return (
    <div className={className}>
      <StepImageComponent
        heading={h3}
        src={src}
        alt={alt}
        ImgClass=" w-32 h-39 "
      >
        {children}
      </StepImageComponent>
    </div>
  );
};

StarRewardCategory.defaultProps = {
  className: "",
};

export default StarRewardCategory;
