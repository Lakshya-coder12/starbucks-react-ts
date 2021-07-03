import React from "react";
import FooterElement from "./FooterElement";
import DividerLine from "./DividerLine";
import SocialMediaHandles from "./SocialMediaHandles";

interface Props {}

const FooterSection: React.FC<Props> = (props) => {
  return (
    <div className="pb-8 mt-12">
      <div className="pb-8">
        <DividerLine />
      </div>
      <div className="px-4">
        <FooterElement title="About Us" className="py-2 mb-4" />
        <FooterElement title="Careers" className="py-2 mb-4" />
        <FooterElement title="Social Impact" className="py-2 mb-4" />
        <FooterElement title="For Business Partners" className="py-2 mb-4" />
        <FooterElement title="Order and Pickup" className="py-2" />
        <div className="py-8">
          <DividerLine />
        </div>
        <div className="pb-4">
          <SocialMediaHandles />
        </div>
        <ul className="pt-4">
          <li className="py-2 mb-1">
            <a
              className="text-sm no-underline hover:underline"
              href="https://www.starbucks.com/about-us/company-information/online-policies/privacy-policy"
            >
              Privacy Policy
            </a>
          </li>
          <li className="py-2 mb-1">
            <a
              className="text-sm no-underline hover:underline"
              href="https://www.starbucks.com/about-us/company-information/online-policies/terms-of-use"
            >
              Terms of Use
            </a>
          </li>
          <li className="py-2 mb-1">
            <a
              className="text-sm no-underline hover:underline"
              href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf"
            >
              CA Supply Chain Act
            </a>
          </li>
          <li className="py-2 mb-1">
            <a
              className="text-sm no-underline hover:underline"
              href="https://ideas.starbucks.com/"
            >
              Submit Your Idea
            </a>
          </li>
          <li className="py-2 mb-1">
            <a
              className="text-sm no-underline hover:underline"
              href="www.starbucks.com/rewards"
            >
              Cookie Preferences
            </a>
          </li>
        </ul>
        <p className="py-4 text-gray-400 text-13">
          © 2021 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

FooterSection.defaultProps = {};

export default FooterSection;
