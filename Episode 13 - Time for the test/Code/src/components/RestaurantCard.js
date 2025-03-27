import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData.info);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    
    const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid="resCard" className="p-4 m-4 w-56 bg-gray-200 hover:bg-gray-400 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-2xl font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4 className="font-bold">{loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// Input - RestaurantCard ==>> RestaurantCardOffer

export const withNonVegLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <p className="absolute bg-black text-white p-2 m-2 rounded-r-lg">Non-VEG</p>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;
