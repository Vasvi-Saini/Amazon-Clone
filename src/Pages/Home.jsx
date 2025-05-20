import React from "react";
import { mainCardData , sliderData1 , sliderData2  } from "../Constants";
import { useNavigate } from "react-router";
import AmazonCarousel from "../Components/AmazonCarousel";
import Footer from "../Components/Footer";

// const cardsData = [
//   {
//     //cardData
//     title: "Pick up where you left off",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//     ],
//     redirect_label: "See more",
//   },

//   {
//     title: "Pick up where you left off",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//     ],
//     redirect_label: "See more",
//   },

//   {
//     title: "Starting ₹349 | Bestselling headphones",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/G/31/img24hp/MayArt_MSo/1/2/p/PC_CC_758x608_1._SY608_CB796583001_.jpg",
//       },
//     ],
//     redirect_label: "See more",
//   },

//   {
//     title: "Pick up where you left off",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//     ],
//     redirect_label: "See more",
//   },

//   {
//     title: "Pick up where you left off",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//     ],
//     redirect_label: "See more",
//   },

//   {
//     title: "Pick up where you left off",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//     ],
//     redirect_label: "See more",
//   },

//   {
//     title: "Pick up where you left off",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//     ],
//     redirect_label: "See more",
//   },

//   {
//     title: "Pick up where you left off",
//     subCardData: [
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//       {
//         img_url:
//           "https://c.media-amazon.com/images/I/61csn4nBEpL._AC_SY220_.jpg",
//         label:
//           "MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts",
//       },
//     ],
//     redirect_label: "See more",
//   },
// ];

export default function Home() {
  return (
    <div className=" w-full relative top-[97px] flex flex-col justify-start items-center gap-4 ">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_GW_PC_Hero_H1_SHOP-NOW_ETomorrow_2X._CB795428820_.jpg"
        alt=""
      />
    
      {/* <AmazonCarousel /> */}


      <div className="flex flex-col -mt-85  gap-5  px-6 bg-gradient-to-b from-[transparent] to-[#E3E6E6]/70 backdrop-blur-3xl">

        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mainCardData.map(({ title, subCardData, redirect_label }) => (
            <MainCard
              title={title}
              subCardData={subCardData}
              redirect_label={redirect_label}
            />
          ))}
        </div>

        <Maincard2
          title={"Up to 70% off on | Bestselling smartwatches"}
          redirect_label={"See all offers"}
          subCardData={sliderData1}
        />

       

        <Maincard2
          title={"Up to 70% off on | Bestselling smartwatches"}
          redirect_label={"See all offers"}
          subCardData={sliderData2}
        />

    

      </div>
    </div>
  );
}

function MainCard({ title, subCardData, redirect_label }) {
  return (
    <div className="p-4 flex flex-col justify-start items-start  w-full  rounded-xs bg-white gap-4 shadow-2xl ">
      <span className="text-xl font-bold">{title}</span>

      {subCardData.length > 1 ? (
        <div className="grid grid-cols-2 gap-4 ">
          {subCardData?.map(({ img_link, product_name, product_id }) => (
            <SubCard1
              img_link={img_link}
              product_name={product_name}
              product_id={product_id}
            />
          ))}
        </div>
      ) : subCardData.length === 1 ? (
        <SubCard2
          img_link={subCardData[0].img_link}
          product_id={subCardData[0].product_id}
        />
      ) : null}

      <span className="text-sx font-normal text-[#2162A1]">
        {redirect_label}
      </span>
    </div>
  );
}

function SubCard1({ img_link, product_name, product_id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product_id}`)}
      className="flex flex-col  items-start  gap-1"
    >
      <img
        src={img_link}
        alt="product-image"
        className="h-32 w-full rounded-md object-contain"
      />
      <span className=" max-w-full text-sm  font-medium line-clamp-1 ">
        {product_name}
      </span>
    </div>
  );
}

function SubCard2({ img_link, product_id }) {
  const navigate = useNavigate();
  return (
    <img
      src={img_link}
      alt="product-image"
      className="h-full w-auto rounded-md object-contain   "
      onClick={() => navigate(`/products/${product_id}`)}
    />
  );
}

// Pick up where you left off
// https://www.amazon.in/MORE-TRENDZ-Relaxed-Printed-Regular/dp/B0DRGNBWWZ/?_encoding=UTF8&pd_rd_w=g5BQA&content-id=amzn1.sym.2c041c67-74d1-4898-8c3d-0d9bbd87e23d%3Aamzn1.symc.0cc9ad80-e1cf-4227-9adf-8a6e88938a11&pf_rd_p=2c041c67-74d1-4898-8c3d-0d9bbd87e23d&pf_rd_r=9Z54KWV7A97582B7X46Y&pd_rd_wg=BMrAa&pd_rd_r=2e06fc40-61d2-473f-9726-d46e5dde43b7&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d
// MORE N MORE TRENDZ Women's Relaxed Fit Solid Cotton Printed Shirts
// https://www.amazon.in/Mubeno-Printed-Yellow-Stylish-Sunflower/dp/B0D31W6N5F/?_encoding=UTF8&pd_rd_w=g5BQA&content-id=amzn1.sym.2c041c67-74d1-4898-8c3d-0d9bbd87e23d%3Aamzn1.symc.0cc9ad80-e1cf-4227-9adf-8a6e88938a11&pf_rd_p=2c041c67-74d1-4898-8c3d-0d9bbd87e23d&pf_rd_r=9Z54KWV7A97582B7X46Y&pd_rd_wg=BMrAa&pd_rd_r=2e06fc40-61d2-473f-9726-d46e5dde43b7&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d
// Mubeno Women's Floral Printed Poly Rayon Tops for Women | Stylish Jeans Top Shirt Woman & Girls | Regular Officewear | Casual | Ethnic | Summer
// https://www.amazon.in/JC-JUMMY-COUTURE-Regular-Georgette/dp/B0DZD75V13/?_encoding=UTF8&pd_rd_w=g5BQA&content-id=amzn1.sym.2c041c67-74d1-4898-8c3d-0d9bbd87e23d%3Aamzn1.symc.0cc9ad80-e1cf-4227-9adf-8a6e88938a11&pf_rd_p=2c041c67-74d1-4898-8c3d-0d9bbd87e23d&pf_rd_r=9Z54KWV7A97582B7X46Y&pd_rd_wg=BMrAa&pd_rd_r=2e06fc40-61d2-473f-9726-d46e5dde43b7&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d
// JC JUMMY COUTURE Casual Regular Sleeves Printed Women Black Georgette Shirt

function Maincard2({ title, subCardData, redirect_label }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-6 py-4 flex flex-col gap-2 rounded-xs">
      <span className="flex gap-4 items-center">
        <span className="text-xl font-bold">{title}</span>

        <span className="text-sm font-normal text-[#2162A1]">
          {redirect_label}
        </span>
      </span>

      <div className="flex flex-nowrap gap-2 overflow-x-auto ">
        {subCardData.map(({ img_link, product_id }) => (
          <img
            onClick={() => navigate(`/products/${product_id}`)}
            className="w-[15%] h-60 object-contain cursor-pointer"
            src={img_link}
          />
        ))}
      </div>
    </div>
  );
}


