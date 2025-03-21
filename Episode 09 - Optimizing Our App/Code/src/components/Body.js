import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //All Restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Filtered Restaurants
  const [searchRestaurant, setSearchRestaurant] = useState(""); //Search Restaurants

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection.
      </h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={searchRestaurant}
          onChange={(e) => {
            setSearchRestaurant(e.target.value);
            const filteredRes = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase());
            });

            setFilteredRestaurants(filteredRes);
          }}
        />
        <button
          className="res-search"
          onClick={() => {
            const filteredRes = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase());
            });

            setFilteredRestaurants(filteredRes);
          }}
        >
          Search
        </button>

        <button
          className="res-filter"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList); //updating the state
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {searchRestaurant.length > 0
          ? //showing only filtered restaurants
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          : //showing all the restaurants
            listOfRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
