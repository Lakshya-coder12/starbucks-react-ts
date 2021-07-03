import React from "react";
import H2 from "./H2";
import RoundedLink from "./RoundedLink";
import UnderlinedLink from "./UnderlinedLink";

interface Props {}

const StarCodes: React.FC<Props> = (props) => {
  return (
    <div className="px-4 my-18">
      <div className="mb-18">
        <H2 className="pb-4">Star Codes</H2>
        <p className="pb-4 text-sm">
          Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
          add Stars to your account.
        </p>
        <form className="pb-8">
          <div className="py-3">
            <input
              className="w-full px-4 py-3 border border-black rounded-lg"
              type="text"
              placeholder="Enter your Star Code"
            />
          </div>
          <button className="block mt-2 ml-auto">
            <RoundedLink>Submit</RoundedLink>
          </button>
        </form>
        <p className="text-13">Have a receipt but don't have a code?</p>
        <p className="text-13">
          Go to{" "}
          <UnderlinedLink
            theme="green"
            externalLink={true}
            href="https://starbucks-stars.com/en-us/"
          >
            starbucks-stars.com
          </UnderlinedLink>{" "}
          to upload your receipt and collect your Stars.
        </p>
      </div>
      <H2 className="pb-4">Questions?</H2>
      <p className="pb-4 text-sm">
        We want to help in any way we can. You can ask your barista anytime or
        we’ve answered the most commonly asked questions{" "}
        <UnderlinedLink
          theme="green"
          href="https://customerservice.starbucks.com/app/answers/list/p/552"
          externalLink={true}
        >
          right over here
        </UnderlinedLink>
        .
      </p>
    </div>
  );
};

StarCodes.defaultProps = {};

export default StarCodes;
