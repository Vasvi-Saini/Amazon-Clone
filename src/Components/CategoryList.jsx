import { useState } from "react";
import HamburgerImage from "./../assets/hamburger.svg";
import SlideBar from "./SlideBar";

export default function CategoryList() {
  const borderStyles = "border-transparent border hover:border-white";

  const [toggleSlider, setToggleSlider] = useState(false);

  function handleSlider(){
    setToggleSlider(!toggleSlider)
  }

  return (
    <div className="z-50 fixed top-15 w-full bg-[#252f3d] flex text-nowrap gap-2 overflow-auto justify-between text-sm">

      {toggleSlider && <SlideBar handleSlider={handleSlider}/>}

      <span onClick={handleSlider} className="flex justify-center items-center border hover:border-white border-transparent text-white font-bold">
        <img src={HamburgerImage} alt="" />
        All
      </span>

      {categories.map((item) => (
        <div
          className={`${borderStyles} text-white p-2 hover:border-white border-transparent`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

const categories = [
  "Fresh",
  "MX Player",
  "Sell",
  "BestSeller",
  "Today's Deals",
  "Mobiles",
  "Prime",
  "Fashion",
  "Customer Service",
  "New Releases",
  "Electronics",
  "Amazon Pay",
  "Home & Kitchen",
  "Computers",
  "Books",
];
