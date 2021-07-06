import React from "react";
import H2 from "./H2";
import StepImageComponent from "./StepImageComponent";
import UnderlinedLink from "./UnderlinedLink";
import fun_freebies from "./img/fun-freebies.webp";
import phone from "./img/phone.webp";
import smoothie from "./img/smoothie.webp";

interface Props {}

const EndlessExtrasSection: React.FC<Props> = (props) => {
  return (
    <div className="px-4 mb-10 md:px-6 mt-18 md:my-32">
      <H2 className="text-center">Endless Extras</H2>
      <p className="max-w-xl pt-4 ml-auto mr-auto text-sm text-center md:text-base">
        Joining Starbucks&reg; Rewards means unlocking access to exclusive
        benefits. Say hello to easy ordering, tasty Rewards and—yes, free
        coffee.
      </p>
      <div className="pt-12 md:flex md:mx-11 lg:mx-16">
        <StepImageComponent
          heading="Fun freebies"
          src={fun_freebies}
          alt="coffee and burger"
          ImgClass=" h-28 w-32 "
          className="md:mr-6"
          applyMediaQueries={true}
        >
          <p>
            Not only can you earn free coffee, look forward to a birthday treat
            plus coffee and tea refills.
          </p>
          <div className="my-4">
            <UnderlinedLink theme="green" externalLink={false}>
              Learn more
            </UnderlinedLink>
          </div>
        </StepImageComponent>
        <StepImageComponent
          heading="Order &amp; pay ahead"
          src={phone}
          alt="phone"
          ImgClass=" h-28 w-32 "
          className="md:mx-6"
          applyMediaQueries={true}
        >
          <p>
            Enjoy the convenience of in-store, curbside or drive-thru pickup at
            select stores.
          </p>
          <div className="my-4">
            <UnderlinedLink theme="green" externalLink={false}>
              Learn more
            </UnderlinedLink>
          </div>
        </StepImageComponent>
        <StepImageComponent
          heading="Get to free faster"
          src={smoothie}
          alt="smoothie"
          ImgClass=" h-28 w-32 "
          className="md:ml-6"
          applyMediaQueries={true}
        >
          <p>
            Earn Stars even quicker with Bonus Star challenges, Double Star Days
            and exciting games.
          </p>
          <div className="my-4">
            <UnderlinedLink theme="green" externalLink={false}>
              Learn more
            </UnderlinedLink>
          </div>
        </StepImageComponent>
      </div>
    </div>
  );
};

EndlessExtrasSection.defaultProps = {};

export default EndlessExtrasSection;
