import React from "react";
import RoundedLink from "./RoundedLink";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between h-full px-4 py-3.75 md:top-22 lg:top-26 bg-primary-400">
      <p className="pl-32 font-bold tracking-wider text-white text-13">
        STARBUCKS&reg; REWARDS
      </p>
      <RoundedLink
        className="md:hidden"
        href="https://starbucks.app.link/VLa2I3inh9"
        theme="white"
      >
        Join in the app
      </RoundedLink>
    </div>
  );
};

Header.defaultProps = {};

export default Header;
