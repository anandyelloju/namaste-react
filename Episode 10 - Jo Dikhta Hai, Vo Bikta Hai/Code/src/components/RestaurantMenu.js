import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log("Restaurant ID:", resId);

  const resInfo = useRestaurentMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.at(-1)?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  console.log("Menu Items:", itemCards);
  return (
    <div className="p-16 mx-36 my-8 rounded-2xl bg-white shadow-2xl">
      <h1 className="font-bold text-7xl">{name}</h1>
      <p className="text-lg">
        {cuisines.join(", ")} | {costForTwoMessage}
      </p>
      <h2 className="font-bold text-3xl">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
