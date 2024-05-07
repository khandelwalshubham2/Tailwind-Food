import { useState } from "react";
import { foodList } from "../utils/Const";

const Menu = () => {
  const button = ["All", "Food", "Snack", "Beverage"];
  const foodItems = foodList;
  const [filterItems, setFilterItems] = useState(foodItems);
  const [activeButton, setActiveButton] = useState("All");
  const filterFood = (item) => {
    let newList = foodItems;
    setActiveButton(item);
    if (item === "All") {
      setFilterItems(newList);
    } else {
      newList = foodItems.filter(
        (foodItem) => foodItem.category.toLowerCase() === item.toLowerCase()
      );
      setFilterItems(newList);
    }
  };
  return (
    <div className="container py-5" id="Menu">
      <div className="max-w-md mx-auto text-center mb-4">
        <p className="uppercase">our best menu</p>
        <div className="seperator mx-auto"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          recusandae debitis ipsum corporis? Quo, eligendi.
        </p>

        <ul className="flex flex-row flex-wrap justify-center gap-4 mt-5">
          {button.map((item) => (
            <li
              onClick={() => filterFood(item)}
              className={`btn menu-btn ${
                item.toLowerCase() === activeButton.toLowerCase()
                  ? "active-menu-btn"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterItems.map((item) => (
          <div className="item-card py-5">
            <div className="bg-primaryColorLight dark:bg-darkColorLight h-56 flex justify-center items-center hover:bg-secondaryColor ease-linear duration-200 rounded-3xl">
              <img
                src={`${item.imagePath}`}
                alt=""
                className="w-40 hover:scale-110 ease-linear duration-200"
              />
            </div>
            <div className="py-5">
              <p className="text-2xl uppercase">{item.foodName}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-secondaryColor">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
