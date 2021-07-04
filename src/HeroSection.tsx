import React from "react";
import RoundedLink from "./RoundedLink";
import UnderlinedLink from "./UnderlinedLink";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {
  return (
    <div className="aspect-w-3 aspect-h-4 md:aspect-h-5 md:aspect-w-9">
      <div className="bg-cover bg-primary-200 bg-hero md:bg-hero-large md:bg-cover md:flex md:items-center">
        <div className="flex flex-col items-center px-4 py-8 md:px-6 lg:px-10 md:py-8 md:items-start">
          <h1 className="text-2.5xl font-semibold tracking-tighter md:text-4xl">
            FREE COFFEE
          </h1>
          <h1 className="text-2.5xl font-semibold tracking-wide md:text-4xl md:pt-3">
            IS A TAP AWAY
          </h1>
          <p className="pt-4 tracking-lessTight md:text-19">
            Join now to start earning Rewards.
          </p>
          <RoundedLink
            className="mt-8"
            href="https://starbucks.app.link/VLa2I3inh9"
            theme="green"
          >
            <span className="hidden md:block">Join now</span>
            <span className="md:hidden">Join in the app</span>
          </RoundedLink>
          <div className="mt-4">
            <span className="hidden md:inline text-19">Or </span>
            <UnderlinedLink
              className="text-19"
              href="https://www.starbucks.com/account/create"
              externalLink={false}
            >
              <span className="hidden md:inline">join in the app</span>
              <span className="md:hidden">Or join online</span>
            </UnderlinedLink>
            <span className="hidden md:inline text-19">
              {" "}
              for the best experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.defaultProps = {};

export default HeroSection;
