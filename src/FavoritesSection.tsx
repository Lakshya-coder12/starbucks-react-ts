import React from "react";
import StarValue from "./StarValue";
import H2 from "./H2";
import H3 from "./H3";
import coffee from "./img/coffee.webp";

interface Props {}

const FavoritesSection: React.FC<Props> = (props) => {
  return (
    <div className="pt-12 bg-primary-100">
      <H2 className="pb-4 text-center">Get your favorites for free</H2>
      <div className="flex flex-grow">
        <StarValue
          className="justify-center flex-1 border-b-4 border-primary-300"
          value={25}
        />
        <StarValue className="justify-center flex-1" value={50} />
        <StarValue className="justify-center flex-1" value={150} />
        <StarValue className="justify-center flex-1" value={200} />
        <StarValue className="justify-center flex-1" value={400} />
      </div>
      <div className="pt-8 bg-primary-200">
        <img className="h-auto" src={coffee} alt="coffee" />
        <div className="px-4">
          <H3 className="pt-8 text-center text-19">Customize your drink</H3>
          <p className="pt-4 pb-12 text-sm text-center">
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
