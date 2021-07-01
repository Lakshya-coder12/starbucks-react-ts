import React from "react";
import H2 from "./H2";
import StepComponent from "./StepComponent";
import UnderlinedLink from "./UnderlinedLink";

interface Props {}

const GettingStartedSection: React.FC<Props> = (props) => {
  return (
    <div className="px-4 my-18">
      <H2 className="text-center">Getting started is easy</H2>
      <p className="pt-4 text-sm text-center">
        Earn Stars and get rewarded in a few easy steps.
      </p>
      <div className="pt-12">
        <StepComponent heading="Download the Starbucks&reg; app" stepNumber={1}>
          <UnderlinedLink
            theme="green"
            href="https://starbucks.app.link/VLa2I3inh9"
          >
            Join in the app
          </UnderlinedLink>{" "}
          to get access to the full range of Starbucks&reg; Rewards benefits.
          You can also{" "}
          <UnderlinedLink
            theme="green"
            href="https://www.starbucks.com/account/create"
          >
            join online.
          </UnderlinedLink>
        </StepComponent>
        <StepComponent
          className="pt-8"
          heading="
Order and pay how you’d like"
          stepNumber={2}
        >
          Use cash, credit/debit card or save some time and pay right through
          the app. You’ll collect Stars all ways.{" "}
          <UnderlinedLink
            theme="green"
            href="https://www.starbucks.com/rewards#waystopay"
          >
            Learn how
          </UnderlinedLink>
        </StepComponent>
        <StepComponent
          className="pt-8"
          heading="Earn Stars, get Rewards"
          stepNumber={3}
        >
          As you earn Stars, you can redeem them for Rewards—like free food,
          drinks, and more. Start redeeming with as little as 25 Stars!
        </StepComponent>
      </div>
    </div>
  );
};

GettingStartedSection.defaultProps = {};

export default GettingStartedSection;
