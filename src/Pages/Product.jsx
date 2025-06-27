import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { productsData } from "../Constants";
import { useCart } from "../Contexts/CartContext";
import { CartProduct } from "./Cart";

// import chevron from "../assets/Chevron.svg"

export default function Product() {
  const { productId = "" } = useParams();
  const {addToCart} = useCart();
  const navigate = useNavigate(); 

  const [selectedQuantity , setSelectedQuantity] = useState(1)

  const productData = productsData.find(
    (product) => product.product_id === productId
  );


  if (!productData) {
    return (
      <div className="bg-[#E3E6E6] w-full relative top-[99px] min-h-0 h-500 flex flex-col justify-start items-center px-4 gap-4">
        <p className="text-2xl font-amazonEmber ">Product Not found</p>
      </div>
    );
  }

  const { 
    discounted_price,
    actual_price,
    discount_percentage,
    rating,
    rating_count,
    product_name,
    about_product,
  } = productData;

  return (
    // productData ? <div className=" bg-[#E3E6E6] w-full relative top-[97px] min-h-0 h-500 flex flex-col justify-start items-center px-4 gap-4">{JSON.stringify(productData)}</div> : <> Product not found </>
      
      <div className="flex items-start gap-8 relative top-[120px] px-6">

        {/* product image */}
        <img
          src={productData.img_link}
          bdkiwx
          alt="productImage"
          className="h-120 w-[40%] object-contain justify-start items-center "
        />

        
        {/* Product details */}
        <div className="flex w-[40%] flex-col  gap-5 ">


         <div className="flex flex-col ">
          <span className="text-[#0F1111] text-[24px] font-amazonEmber ">
            {product_name}
          </span>
          <a
            href="#"
            className="hover:underline cursor-pointer font-amazonEmber  hover:text-[#0c3353] text-[#2162A1]"
          >
            {" "}
            Visit the The Artment your artistic apartment Store
          </a>
          <div className="flex gap-3">
            <span className="font-amazonEmber">{rating}</span>
            {/* <img src={chevron} alt="" /> */}
            <span className="font-amazonEmber hover:text-[#0c3353] text-[#2162A1] hover:underline">
              {" "}
              {rating_count} ratings{" "}
            </span>
          </div>

        </div>

         <span><strong>2K+ bought </strong>in past month</span>


          <hr className="text-[#ced4d4] size-[1] " />




          <div className="flex flex-col gap-2 ">

          <span className="font-amazonEmber text-[12px] bg-[#d40808] w-fit px-2 py-2  text-white rounded-md font-bold ">
            Limited time deal
          </span>

          <div className="">
            <span className="  font-amazonEmber  text-[28px]  text-[#da1c49]">
              {" "}
              -{discount_percentage}
            </span>

            <span className="font-amazonEmber text-[28px] text-[#0f1111] ">
              {" "}
              {discounted_price}
            </span>
          </div>

          <span className="text-[12px] font-amazonEmber text-[#565959] leading-[16px]">
            M.R.P: <s>{actual_price}</s>
          </span>

          <span className="font-amazonEmber text-[14px] leading-[20px] text-[#0f1111] mt-3">
            {" "}
            Inclusive of all taxes
          </span>

          <div className="flex gap-2">
            <span className="font-amazonEmber text-[14px] leading-[20px] text-[#0f1111]">
              {" "}
              <b>EMI</b> starts at ₹132 per month.
            </span>

            <span className="text-[#2162A1] cursor-pointer hover:text-[#0c3353] text-[14px] cursor:pointer hover:border-3 hover:border-[#30455b] rounded-lg ">
              EMI options{" "}
            </span>
          </div>

  

          <div className="flex gap-3 mt-4">
            <img src="" alt="Offer-img" />
            <span className="font-amazonEmber text-[14px] leading-[20px] text-[#0f1111] cursor-text font-bold ">
              Offers
            </span>
          </div>

          <div className="flex gap-2 text-[#0f1111] p-2">

            <div className="flex flex-col w-40 rounded-md  p-1 text-[14px] shadow-[-0.5px_0.5px_4px_0.5px_rgba(0,0,0,0.2)]">
              <span className="  font-bold">Cashback</span>
              <span className="line-clamp-3">
                Upto ₹43.00 cashback as Amazon Pay Balance when you pay with
                Amazon Pay ICICI Bank Credit CardsUpto ₹43.00 cashback as Amazon
                Pay Balance when...
              </span>
              <span className="font-amazonEmber hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">1 offers</span>
            </div>

            <div className="flex flex-col w-40 p-1 text-[14px] rounded-md  shadow-[-0.5px_0.5px_4px_0.5px_rgba(0,0,0,0.2)]">
              <span className="  font-bold">Cashback</span>
              <span className="line-clamp-3">
                Upto ₹43.00 cashback as Amazon Pay Balance when you pay with
                Amazon Pay ICICI Bank Credit CardsUpto ₹43.00 cashback as Amazon
                Pay Balance when...
              </span>
              <span className="font-amazonEmber hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer"> 1 offers</span>
            </div>

            <div className="flex flex-col w-40 p-1 text-[14px] rounded-md shadow-[-0.5px_0.5px_4px_0.5px_rgba(0,0,0,0.2)]">
              <span className="  font-bold">Cashback</span>
              <span className="line-clamp-3">
                Upto ₹43.00 cashback as Amazon Pay Balance when you pay with
                Amazon Pay ICICI Bank Credit CardsUpto ₹43.00 cashback as Amazon
                Pay Balance when...
              </span>
              <span className="font-amazonEmber hover:text-[#0c3353] text-[#2162A1] hover:underline "> 1 offers</span>
            </div>

         </div>
      </div>
           
                 
            <hr className="text-[#ced4d4]  " />
            


          <div className="font-amazonEmber  text-[#0f1111] text-[16px] flex flex-col gap-1 ">
            <span className="font-[700]">About this item</span> 
            <div >{about_product.replaceAll('|' , " ")}</div>
          </div>

          <span className="font-amazonEmber hover:text-[#0c3353] text-[#2162A1] hover:underline ">   Report an issue with this product</span>
        </div>


       {/* Card */}
        <div className="w-[20%] p-4 flex flex-col gap-[15px] border rounded-md border-[#ced4d4]">
          <span className="text-[28px]  text-[#0F1111] font-normal">
            {discounted_price}
          </span>

          <span className="text-[14px] font-[400] ">
            FREE delivery <strong>Tuesday,7 October</strong> to{" "}
            <a href="#" className="text-[#2162A1] underline">
              Dehradun 248001.
            </a>
            <span>
              {" "}
              <a className="text-[#2162A1] underline cursor-pointer">
                {" "}
                Details
              </a>
            </span>
          </span>

          <span className="text-[14px] font-[400] ">
            or faster delivery <strong>Tomorrow, 9 October</strong>. Order
            within 7hrs 41 mins
          </span>
          <span className="text-[18px] font-[400] text-[#067d62] ">
            In stock
          </span>

          <div className="grid grid-col-2 w-full gap-y-1 gap-x-1 text-[12px] font-amazonEmber">
            <div className="flex gap-4">
              <span>Ships from</span>
              <span>Amazon</span>
            </div>

            <div className="flex gap-8 ">
              <span>Sold by</span>
              <a
                href="#"
                className=" cursor-pointer hover:underline text-[#2162A1]"
              >
                Vasvi retail
              </a>
            </div>

            <div className="flex gap-7 mb-[15px]">
              <span>Payment</span>
              <a href="#" className=" hover:underline text-[#2162A1]">
                Secure transaction
              </a>
            </div>

            <label className="flex items-center text-[13px] font-[400] bg-[#E3E6E6] rounded-md border-[1px] border-[ced4d4]  ">
              {" "}
              Quantity:
              <select value={selectedQuantity} onChange={(e)=>setSelectedQuantity(e.target.value)} name="" id="" className="p-[6px] px-[9px] w-full">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </label>

            <button onClick={
              () => {
                addToCart(productId , selectedQuantity) 
                navigate('/cart')
              }

             } className="p-[6px] px-[9px] mt-[2px] border-none text-[13px] font-[400] text-[#0f11114] cursor-pointer bg-[#FFD814] hover:bg-[#FFCE12] rounded-2xl">

              Add to Cart 
              
            </button>
            <button className="p-[6px] px-[9px] mt-[2px] mb-2 border-none text-[13px] font-[400] text-[#0f11114] cursor-pointer bg-[#FFA41C] hover:bg-[#FA8900] rounded-2xl">
              Buy Now
            </button>

            <label className=" text-[14px]  font-amazonEmber leading-[20px] text-[#0F1111] ">
              <input type="checkbox" className="cursor-pointer"/> Add gift options
            </label>

            <hr className="text-[#ced4d4] size-[1] mb-[13px] " />
            <button className="p-[6px] px-[9px] flex justify-start border-[1px] rounded-lg font-[400] text-[13px] ">
              <p className="text-[14px]  font-amazonEmber ">Add to wishlist </p>
            </button>
          </div>
        </div>
      </div>
  
  );
}
