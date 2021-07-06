import React from "react";
import H3 from "./H3";
import UnderlinedLink from "./UnderlinedLink";

interface Props {}

const RestrictionsSection: React.FC<Props> = (props) => {
  return (
    <div className="px-4 py-8 md:px-6 md:py-12 bg-terms-section">
      <p className="pb-8 text-13 md:text-sm">
        At participating stores. Restrictions apply.
      </p>
      <div className="md:grid md:grid-cols-12">
        <div className="pb-8 md:col-span-6">
          <H3 className="pb-4 font-bold tracking-wider text-gray-600 text-13 md:text-sm">
            EARNING STARS
          </H3>
          <p className="pb-4 text-13 md:text-sm">
            Stars cannot be earned on purchases of alcohol, Starbucks Cards or
            Starbucks Card reloads.
          </p>
          <p className="pb-4 text-13 md:text-sm">
            Earn 1 Star per $1 spent when you scan your member barcode in the
            app, then pay with cash, credit/debit cards or mobile wallets at
            participating stores. You can also earn 1 Star per $1 spent when you
            link a payment method and pay directly through the app.
          </p>
          <p className="text-13 md:text-sm">
            Earn 2 Stars per $1 spent when you load funds and pay with your
            digital Starbucks Card in the app. You can also earn 2 Stars per $1
            spent when you pay in-person at a participating store with your
            registered physical Starbucks Card or scan your member barcode in
            the app, and then use any physical Starbucks Card (regardless of
            whether it is registered) to complete the purchase.
          </p>
        </div>
        <div className="pb-8 md:pl-8 md:col-span-6">
          <H3 className="pb-4 font-bold tracking-wider text-gray-600 text-13 md:text-sm">
            TERMS OF USE
          </H3>
          <p className="pb-4 text-13 md:text-sm">
            For full program details visit{" "}
            <UnderlinedLink
              theme="green"
              externalLink={true}
              href="https://www.starbucks.com/terms"
            >
              starbucks.com/rewards/terms
            </UnderlinedLink>
            .
          </p>
          <p className="pb-4 text-13 md:text-sm">
            * Earn 1 Star per $1 when digitally loading your Starbucks Card with
            your Starbucks® Rewards Visa® Card: See your Card Rewards Program
            Agreement for more details.
          </p>
          <p className="pb-4 text-13 md:text-sm">
            Starbucks® Rewards benefits are available at participating Starbucks
            stores. Not all stores have the ability to honor Rewards at this
            time. Visit the{" "}
            <UnderlinedLink
              theme="green"
              externalLink={true}
              href="https://www.starbucks.com/store-locator"
            >
              Starbucks Store Locator
            </UnderlinedLink>{" "}
            and search for locations honoring “Redeem Rewards”.
          </p>
          <p className="text-13 md:text-sm">
            Deposit and credit card products provided by JPMorgan Chase Bank,
            N.A. Member FDIC
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12">
        <div className="pb-8 md:pb-0 md:col-span-6">
          <H3 className="pb-4 font-bold tracking-wider text-gray-600 text-13 md:text-sm">
            BENEFITS
          </H3>
          <p className="text-13 md:text-sm">
            Free refills available during same in-store visit only. To qualify
            for the Birthday Reward, you must have made at least one
            Star-earning transaction.
          </p>
        </div>
        <div className="md:col-span-6 md:pl-8">
          <H3 className="pb-4 font-bold tracking-wider text-gray-600 text-13 md:text-sm">
            REDEEMING REWARDS
          </H3>
          <p className="text-13 md:text-sm">
            Rewards cannot be redeemed for alcoholic beverages or multi-serve
            items. Not all stores honor tiered Rewards. Select stores redeem 150
            Stars for free food or drink items only.
          </p>
        </div>
      </div>
    </div>
  );
};

RestrictionsSection.defaultProps = {};

export default RestrictionsSection;
