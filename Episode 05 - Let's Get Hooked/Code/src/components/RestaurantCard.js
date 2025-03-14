import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img className="res-logo" alt="res-logo" src={CDN_URL+resData.data.cloudinaryImageId} /> */}
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines}</h4>
      <h4>{resData.data.avgRating}</h4>
      <h4>{resData.data.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;