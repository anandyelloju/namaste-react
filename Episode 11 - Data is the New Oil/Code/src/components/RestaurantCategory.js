import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
//   console.log(data);
const handleClick = () => {
    setShowItems();
}
  return (
    <div>
      {/* Header */}
      <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordions Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>      
    </div>
  );
};

export default RestaurantCategory;
