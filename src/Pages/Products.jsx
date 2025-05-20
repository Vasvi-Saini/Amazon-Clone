// import React from 'react'
// import { productsData } from '../Constants'
// import ProductCard from '../Pages/ProductCart' // adjust path if needed

// export default function Products() {
//   return (
//     <div className="p-4 space-y-4 max-w-5xl mx-auto relative top-[99px] ">
//       <h1 className="text-2xl font-bold mb-4">Product Listings</h1>
//       {productsData.map((product, index) => (
//         <ProductCard
//           key={product.product_id || index}
//           img_link={product.img_link}
//           product_name={product.product_name}
//           discounted_price={product.discounted_price}
//           actual_price={product.actual_price}
//           rating={product.rating}
//           product_id={product.product_id}
//         />
//       ))}
//     </div>
//   )
// }

import React from "react";
import { HoverStyles } from "../Constants";
import { useNavigate } from "react-router";
import { useProducts } from "../Contexts/ProductsContext";

export default function Products() {

  const {FilteredData} = useProducts();


  return (
    <div className="flex w-full justify-between relative top-[99px] bg-slate-200 h-fit p-4 ">
      <div className="w-[24%] h-fit p-4 bg-white">j</div>
      {/* shopping cart */}

      <div className="w-[75%] flex flex-col gap-4 h-fit rounded">
        <div className="w-full bg-white p-4 h-fit">
          <div className="font-amazonEmber font-[400] text-[28px] text-[#0f1111] leading-[36px] ">
            Search results
          </div>
          <div className="font-amazonEmber font-[400] text-[16px] text-[#565959] flex justify-end ">
            Price
          </div>
          <hr className="text-[#DDDDDD] font-amazonEmber font-[400]" />
          <div>
            {FilteredData.length ? (
              FilteredData.map((obj) => {
                return (
                  <>
                    <Product
                      img_link={obj.img_link}
                      product_name={obj.product_name}
                      product_id={obj.product_id}
                    />
                    <hr className="text-[#DDDDDD] font-amazonEmber font-[400]" />
                  </>
                );
              })
            ) : (
              <div> :( No products Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Product({ img_link, product_name, product_id }) {

  const navigate = useNavigate();

  return (
    <div className="flex gap-4 justify-between p-4 font-amazonEmber">
      <img
        onClick={() => navigate(`/products/${product_id}`)}
        src={img_link}
        alt=""
        className=" w-[20%] h-[180px] object-contain cursor-pointer"
      />

      <div className="flex flex-col gap-1 w-[70%]">
        <div
          className= { `${HoverStyles} cursor-pointer text-[18px] leading-[23px] text-[#0f1111] `}
          onClick={() => navigate(`/products/${product_id}`)}
        >
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
      </div>

      <div className="flex flex-col w-[15%]">price vgera aega</div>
    </div>
  );
}

//   function handleSearch(){
//     setFilterData(productsData.filter(({product_name})=>product_name.toLowerCase.includes(inputValue.toLowerCase)))
//   }

// setFilterData(productsData.filter(({product_name})=>product_name.toLowerCase.includes(inputValue.toLowerCase)))

//  const [filteredData , setFilteredData] = useState(productsData)
