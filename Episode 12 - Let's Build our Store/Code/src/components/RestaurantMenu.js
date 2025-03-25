import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log("Restaurant ID:", resId);

  const resInfo = useRestaurentMenu(resId);

  const [showItems, setShowItems] = useState(null);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.at(-1)?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  // console.log(
  //   "Menu Items:",
  //   resInfo?.cards?.at(-1)?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories = resInfo?.cards
    ?.at(-1)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="p-16 mx-36 my-8 rounded-2xl bg-white shadow-2xl text-center">
      <h1 className="font-bold mb-10 text-7xl">{name}</h1>
      <p className="text-lg">
        {cuisines.join(", ")} | {costForTwoMessage}
      </p>
      {/* Categories accordions  */}
      {categories.map((category, index) => (
        // Controled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showItems? true : false}
          setShowItems = {() => setShowItems(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
