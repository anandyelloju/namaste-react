import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch actions
    dispatch(addItem(item))
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.card.info.id} data-testid="foodItems">
            <div className="p-2 m-2 border-b-2 border-gray-400 text-left flex">
              <div className="py-2 flex-1">
                <span className="font-bold text-lg">{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <p>{item.card.info.description}</p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="absolute bg-white px-4 py-2 mx-3 mt-24 rounded-2xl font-bold text-gray-400 border-2 border-amber-600"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-24 rounded-lg"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
