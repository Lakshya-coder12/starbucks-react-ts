import React from "react";
import UnderlinedLink from "./UnderlinedLink";
import H2 from "./H2";
import H3 from "./H3";
import StarRewardCategory from "./StarRewardCategory";
import DividerLine from "./DividerLine";
import card_phone from "./img/card_phone.png";
import dollar from "./img/dollar.png";
import gift_card from "./img/gift-card.png";
import payment from "./img/payment.png";
import visa from "./img/visa.png";

interface Props {}

const StarRewards: React.FC<Props> = (props) => {
  return (
    <div className="px-4 py-12 bg-secondary">
      <div className="pb-12 mb-4">
        <H2 className="pt-6 pb-4 text-center">Cash or card, you earn Stars</H2>
        <p className="text-sm text-center">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
      </div>
      <div className="pb-8">
        <H3>1★ per dollar</H3>
        <p className="text-sm">Pay as you go</p>
      </div>
      <StarRewardCategory
        h3="Scan and pay separately"
        src={card_phone}
        alt="phone and card"
        className="pb-8"
      >
        Use cash or credit/debit card at the register.
      </StarRewardCategory>
      <StarRewardCategory
        h3="Save payment in the app"
        src={payment}
        alt="phone"
        className="pb-8"
      >
        Check-out faster by saving a credit/debit card or PayPal to your
        account. You’ll be able to order ahead or scan and pay at the register
        in one step.
      </StarRewardCategory>
      <div className="pt-4 pb-10">
        <DividerLine />
      </div>
      <div className="pb-8">
        <H3>2★ per dollar</H3>
        <p className="text-sm">Add funds in the app</p>
      </div>
      <StarRewardCategory
        h3="Preload"
        src={dollar}
        alt="dollar sign"
        className="pb-8"
      >
        To save time and earn Stars twice as fast, add money to your digital
        Starbucks Card using any payment option. Scan and pay in one step or
        order ahead in the app.
      </StarRewardCategory>
      <StarRewardCategory
        h3="Register your gift card"
        src={gift_card}
        alt="gift card"
        className="pb-8"
      >
        Then use it to pay through the app. You can even consolidate balances
        from multiple cards in one place.
      </StarRewardCategory>
      <div className="pt-4 pb-10">
        <DividerLine />
      </div>
      <div className="pb-8">
        <H3>3★ per dollar</H3>
        <p className="text-sm">With Starbucks&reg; Rewards Visa&reg; Card</p>
      </div>
      <StarRewardCategory
        h3="Earn Stars even faster"
        src={visa}
        alt="visa card"
        className="pb-8"
      >
        Earn Stars on all purchases you make with our{" "}
        <UnderlinedLink
          theme="green"
          externalLink={true}
          href="https://www.starbucks.com/starbucks-rewards/credit-card"
        >
          credit card
        </UnderlinedLink>{" "}
        opens in new window in and outside of Starbucks. Earn 1 Star per $1 when
        you digitally preload your Starbucks Card with your Starbucks&reg;
        Rewards Visa&reg; Card, and earn 2 Stars per $1 when you pay with that
        preloaded Starbucks Card.
      </StarRewardCategory>
    </div>
  );
};

StarRewards.defaultProps = {};

export default StarRewards;
