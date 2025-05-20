import React from "react";
import { useCart } from "../Contexts/CartContext";
import { productsData } from "../Constants";
import { HoverStyles} from "../Constants";
import { Navigate, NavLink, useNavigate } from "react-router";

export default function Cart() {

const { cart = [] } = useCart();


  console.log(cart);

  return (
    <div className="flex w-full justify-between relative top-[99px] bg-slate-200 h-fit p-4">
      {/* shopping cart */}

      <div className="w-[75%] flex flex-col gap-4 h-fit rounded">
        <div className="w-full bg-white p-4 h-fit">
          <div className="font-amazonEmber font-[400] text-[28px] text-[#0f1111] leading-[36px] ">
            Shopping Cart
          </div>
          <div className="font-amazonEmber font-[400] text-[16px] text-[#565959] flex justify-end ">
            Price
          </div>
          <hr className="text-[#DDDDDD] font-amazonEmber font-[400]"/>
          <div>
            {cart.length ? (
              cart.map(({ id, quantity }) => {
                const obj = productsData.find(
                  ({ product_id }) => product_id === id
                );
                return (
                  <>
                  <CartProduct
                    img_link={obj.img_link}
                    product_name={obj.product_name}
                    count={quantity}
                    product_id={obj.product_id}
                  />
                <hr className="text-[#DDDDDD] font-amazonEmber font-[400]" />
                </>
                );
              })
            ) : (
              <div> :( Cart is Empty</div>
            )}
            
          </div>
        </div>

        <div className="w-full h-20 p-4 bg-white "></div>

        <div className="font-amazonEmber w-full text-[12px] font-[400] text-[#0f1111] leading-[16px]">
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price. Do you have a
          promotional code? We'll ask you to enter your claim code when it's
          time to pay.
        </div>
      </div>

      <div className="w-[24%] h-[40%] p-4 bg-white">j</div>
    </div>
  );
}

export function CartProduct({ img_link, product_name, count, product_id }) {
  const { addToCart, removeFromCart , deleteFromCart} = useCart();

       const navigate = useNavigate();

  return (
    <div className="flex gap-4 justify-between p-4 font-amazonEmber">
      <img
       onClick={()=>navigate(`/products/${product_id}`)}
        src={img_link}
        alt=""
        className=" w-[180px] h-[180px] bg-amber-300"
      />
      <div className="flex flex-col gap-1">
        <div className="cursor-pointer text-[18px] leading-[23px] text-[#0f1111]">
          {product_name}
        </div>
        <span className="text-[12px] font-[400] text-[#067d62]">in stock</span>
        <span className="font-amazonEmber text-[14px] text-[#0F1111]  cursor-text">
          Eligible for FREE Shipping
        </span>
        <label className=" text-[12px]  font-amazonEmber leading-[16px] text-[#0f1111] font-[400] ">
          <input type="checkbox" /> This will be a gift
          <span className="font-amazonEmber font-[400] text-[12px]  hover:underline cursor-pointer   hover:text-[#0c3353] text-[#2162A1]">
            {" "}
            Learn more
          </span>
        </label>


        <div className="flex gap-4  items-center">

          <div className="rounded-2xl w-[100px] h-[33px] border-amber-300 border-3 mt-2 flex justify-around items-center ">
            <span
              className="font-light text-xl cursor-pointer"
              onClick={() => {
                removeFromCart(product_id);
              }}
            >
              {" "}
              -{" "}
            </span>
            <span>{count}</span>
            <span
              className="font-light text-xl cursor-pointer "
              onClick={() => {
                addToCart(product_id);
              }}
            >
              +
            </span>
          </div>

          <ItemsSeparator/>
          <span className={HoverStyles}
          onClick={()=>{
            deleteFromCart(product_id);
          }}
          >Delete</span>
          <ItemsSeparator/>
          <span className={`${HoverStyles}`}>Save for later</span>
          <ItemsSeparator/>
          <span className={HoverStyles}>See for like this</span>
          <ItemsSeparator/>
          <span className={HoverStyles}>Share</span>


        </div>
      </div>

      <div className="flex flex-col ">price vgera aega</div>
      
    </div>

    
  );
}

function ItemsSeparator(){
  return(
      <span className="text-[#DDDDDD] font-amazonEmber font-[400]"> | </span>
  )
}
