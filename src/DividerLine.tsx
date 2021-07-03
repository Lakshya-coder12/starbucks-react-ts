import React from "react";

interface Props {}

const DividerLine: React.FC<Props> = (props) => {
  return <hr className="border-t border-gray-400"></hr>;
};

DividerLine.defaultProps = {};

export default DividerLine;
