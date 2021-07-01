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
    <div className={"flex " + className}>
      <div className="pr-4">
        <div className="w-12 h-12 text-center flex items-center justify-center text-2xl text-primary-400 border-2 border-primary-300 rounded-full font-semibold">
          {stepNumber}
        </div>
      </div>
      <div>
        <H3>{heading}</H3>
        <div className="pt-4 text-sm">{children}</div>
      </div>
    </div>
  );
};

StepComponent.defaultProps = {
  className: "",
};

export default StepComponent;
