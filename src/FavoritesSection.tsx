import React from "react";
import StarValue from "./StarValue";
import H2 from "./H2";
import H3 from "./H3";
import coffee from "./img/coffee.webp";

interface Props {}

const FavoritesSection: React.FC<Props> = (props) => {
  return (
    <div className="pt-12 bg-primary-100">
      <H2 className="pb-4 text-center md:pb-12">Get your favorites for free</H2>
      <div className="flex flex-grow md:justify-center">
        <StarValue
          className="justify-center flex-1 border-b-4 border-primary-300 md:flex-grow-0"
          value={25}
          textSize="text-19 md:text-2xl"
        />
        <StarValue
          className="justify-center flex-1 md:flex-grow-0"
          value={50}
          textSize="text-19 md:text-2xl"
        />
        <StarValue
          className="justify-center flex-1 md:flex-grow-0"
          value={150}
          textSize="text-19 md:text-2xl"
        />
        <StarValue
          className="justify-center flex-1 md:flex-grow-0"
          value={200}
          textSize="text-19 md:text-2xl"
        />
        <StarValue
          className="justify-center flex-1 md:flex-grow-0"
          value={400}
          textSize="text-19 md:text-2xl"
        />
      </div>
      <div className="pt-8 md:py-8 bg-primary-200 md:flex md:justify-center md:items-center md:flex-grow">
        <img
          className="h-auto md:h-52 md:w-96 md:mr-12"
          src={coffee}
          alt="coffee"
        />
        <div className="items-center px-4 md:h-32 md:w-80">
          <H3 className="pt-8 text-center md:pt-0 text-19 md:text-2xl md:text-left">
            Customize your drink
          </H3>
          <p className="pt-4 pb-12 text-sm text-center md:text-base md:text-left">
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </p>
        </div>
      </div>
    </div>
  );
};

FavoritesSection.defaultProps = {};

export default FavoritesSection;
