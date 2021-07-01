import React from "react";

interface Props {
  children: string;
  className?: string;
}

const H2: React.FC<Props> = ({ children, className }) => {
  return <h2 className={"text-2xl font-semibold " + className}>{children}</h2>;
};

H2.defaultProps = {
  className: "",
};

export default H2;
