import React from "react";
import H3 from "./H3";

interface Props {
  stepNumber: number;
  heading: string;
  children: React.ReactNode;
  className?: string;
}

const StepComponent: React.FC<Props> = ({
  stepNumber,
  heading,
  children,
  className,
}) => {
  return (
    <div className={"flex md:flex-col md:items-center " + className}>
      <div className="pr-4 md:pr-0">
        <div className="flex items-center justify-center w-12 h-12 text-2xl font-semibold text-center border-2 rounded-full text-primary-300 border-primary-300">
          {stepNumber}
        </div>
      </div>
      <div>
        <H3 className="md:text-center md:pt-6 md:text-19">{heading}</H3>
        <div className="pt-4 text-sm md:text-center md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

StepComponent.defaultProps = {
  className: "",
};

export default StepComponent;
