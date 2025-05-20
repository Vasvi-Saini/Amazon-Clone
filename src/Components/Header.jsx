import React, { useEffect, useState } from "react";
// import AmazonLogo from "./../assets/amazon-logo.svg";
import SearchLogo from "./../assets/search.svg";
import DownArrow from "./../assets/down-arrow.svg";
import cartt from "./../assets/cart.svg";
import LocationLogo from "./../assets/location.svg";
import AmazonLog from "./../assets/amazon-logo.svg?react";
import IndianFlag from "./../assets/indiaFlag.svg";
import { useNavigate } from "react-router";
import { useCart } from "../Contexts/CartContext";
import SignIn from "../Pages/SignIn";
import Products from "../Pages/Products";
import { useProducts } from "../Contexts/ProductsContext";

export default function Header() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { handleSearch = ()=>{}} = useProducts();

  useEffect(() => {
    handleSearch(inputValue);
  }, [inputValue]);

  const { totalItems = 0 } = useCart();

  const borderStyles = "border-transparent border hover:border-white";

  return (
    <div
      className={
        "z-50 fixed flex items-center h-15 justify-center gap-1 text-white px-4 py-1 bg-[#131921] w-full"
      }
    >
      <div
        className={` ${borderStyles} h-[100%] px-2 logo flex items-center`}
        onClick={() => navigate("/home")}
      >
        {/* <img
          src={AmazonLogo}
          alt="Amazon Logo not found"
          className="h-[70px] w-auto hover:outline-2 "
        /> */}
        <AmazonLog className="h-[100%] w-20" />
        <span className="text-sm mb-2">.in</span>
      </div>

      <div
        className={` ${borderStyles} px-1 flex justify-center items-end py-2 `}
      >
        <img src={LocationLogo} alt="Logo" className="pb-1 " />
        <div className="  flex flex-col justify-center ">
          <span className="text-xs">Deliver to this address</span>
          <span className=" text-m font-bold">Update Location</span>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(inputValue);
          navigate("/products");
        }}
        className="flex flex-1 rounded mx-4 h-[80%] focus-within:outline-3 focus-within:outline-orange-400 text-black"
      >
        <select className="bg-[#E6E6E6] px-2 rounded-l border-none outline-none">
          <option>All</option>
        </select>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="flex-1 p-2 bg-white border-none outline-none"
          placeholder="Search Amazon.in"
        />
        <button
          type="submit"
          className="px-2  bg-[#FEBD69] border-none outline-none rounded-r cursor-pointer"
        >
          <img
            className="size-6"
            src="https://img.icons8.com/ios-filled/100/search.png"
            alt="search"
          ></img>
        </button>
      </form>

      <div className={` ${borderStyles} h-[100%] px-2  flex items-end py-2 `}>
        <img src={IndianFlag} alt="" />
        <p className="text-sm font-bold">EN</p>
        <img src={DownArrow} alt="" className="mt-2 " />
      </div>

      <div
        onClick={() => {
          navigate("/auth");
        }}
        className={` ${borderStyles} px-2 flex flex-col justify-center items-center`}
      >
        <span className="text-xs">Hello, Sign in</span>
        <div className="flex">
          <span className="text-m font-bold">Account & Lists</span>
          <img src={DownArrow} alt="" className="mt-2 " />
        </div>
      </div>

      <div
        className={` ${borderStyles} px-2 flex flex-col justify-center items-center`}
      >
        <span className="text-xs">Returns</span>
        <span className="text-m font-bold">& Orders</span>
      </div>

      <div
        onClick={() => navigate("/cart")}
        className={` flex justify-center items-center hover:border-white border border-transparent relative`}
      >
        <img src={cartt} alt="Cart-image" />
        <span className="absolute  bottom-3 right-9.5 text-[14px] text-[#f08804] font-semibold  ">{totalItems}</span>
        <span>Cart</span>
      </div>

      {/* <div className="search-bar flex flex-1 max-w-4xl h-10 rounded-md overflow-hidden">
        <select className="bg-gray-200 text-black px-3  text-sm ">
          <option value="All" disabled selected>
            {" "}
            All
          </option>
          <option value="Amazon Likes"> Amazon Likes</option>
        </select> */}

      {/* <input
          className=" flex-1 px-4  text-black bg-[#ffff] border-4  group-has-[input:active]:outline-[#ff9900]" 
          type="text"
          placeholder="Search Amazon.in"
        />
        <button
        className="bg-amber-400 px-4 rounded-r-md flex items-center justify-center">
          <img src={SearchLogo} alt="Search" className="h-5 w-5" />
        </button>
      </div> */}

      {/* Account */}
      {/* <div className={ `${borderStyles} flex text-sm leading-tight mx-4`}>
        <div><p className="text-gray-300">Hello, Vasvi</p>
        <p className="font-bold">Account & Lists</p></div>

        <img src={DownArrow} alt="Down-Arrow" className="h-1 "/>
      </div> */}

      {/* Orders */}
      {/* <div className="text-sm leading-tight mx-4">
        <p className="text-gray-300">Returns</p>
        <p className="font-bold">& Orders</p>
      </div> */}

      <div>
        {/* <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg> */}
        {/* <img src={Cart} alt="" /> */}
      </div>
    </div>
  );
}
