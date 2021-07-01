import React from "react";
import RoundedLink from "./RoundedLink";
import UnderlinedLink from "./UnderlinedLink";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {
  return (
    <div className="aspect-w-3 aspect-h-4">
      <div className="bg-cover bg-primary-200 bg-hero">
        <div className="flex flex-col items-center px-4 py-8">
          <h1 className="text-2.5xl font-semibold tracking-tighter">
            FREE COFFEE
          </h1>
          <h1 className="text-2.5xl font-semibold tracking-wide">
            IS A TAP AWAY
          </h1>
          <p className="pt-4 tracking-lessTight">
            Join now to start earning Rewards.
          </p>
          <RoundedLink
            className="mt-8"
            href="https://starbucks.app.link/VLa2I3inh9"
            theme="green"
          >
            Join in the app
          </RoundedLink>
          <UnderlinedLink
            className="mt-4 "
            href="https://www.starbucks.com/account/create"
          >
            Or join online
          </UnderlinedLink>
        </div>
      </div>
    </div>
  );
};

HeroSection.defaultProps = {};

export default HeroSection;
