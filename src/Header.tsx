import React from "react";
import RoundedLink from "./RoundedLink";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-2 bg-primary-400">
      <p className="font-bold text-white text-13">STARBUCKS&reg; REWARDS</p>
      <RoundedLink href="https://starbucks.app.link/VLa2I3inh9" theme="white">
        Join in the app
      </RoundedLink>
    </div>
  );
};

Header.defaultProps = {};

export default Header;
