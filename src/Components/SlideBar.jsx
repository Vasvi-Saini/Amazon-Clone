import React from "react";
import Profile from "./../assets/Profile.svg";
import ChevronImage from "./../assets/Chevron.svg";


export default function SlideBar({handleSlider}) {
  return (
    <div className="bg-[#0000009d] h-screen w-screen fixed top-0 left-0 flex flex-col " onClick={handleSlider}>

      <div className="bg-[#252f3d] text-white font-bold text-2xl h-[7%] w-[25%] "  onClick={(e)=>e.stopPropagation()}>
        <div className="flex gap-2 py-2 px-8">
          <img src={Profile} alt="Image" className="bg-white rounded-[100%] " />
          <span>Hello Vasvi! </span>
        </div>
      </div>

      <div className="h-[93%] w-[25%] bg-white overflow-auto pt-4 flex flex-col gap-2 " onClick={(e)=>e.stopPropagation()}>
        {SlideBarData.map(({ title, content }) => (
          <SlideBarBox title={title} content={content} />
        ))}
      </div>

    </div>
  );
}

function SlideBarBox({ title, content }) {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="w-[100%] px-8  font-bold text-lg">{title}</h1>
      <div className="flex flex-col w-full  ">
        {content.map(({ label, chevron }) => (
          <SliderBarItems label={label} chevron={chevron} />
        ))}
      </div>
      <hr />
    </div>
  );
}

function SliderBarItems({ label, chevron }) {
  return (
    <div className="flex justify-between  hover:bg-gray-200 py-2">
      <span className="px-8">{label}</span>
      {chevron && <img src={ChevronImage}/>}
    </div>
  );
}

const SlideBarData = [
  {
    title: "Trending",
    content: [
      { label: "Bestsellers" },
      { label: "New Releases" },
      { label: "Movers and Shakers" },
    ],
  },

  {
    title: "Digital Content and Devices",
    content: [
      { label: "Amazon miniTV- FREE entertainment", chevron: false },
      { label: "Echo & Alexa", chevron: true },
      { label: "Fire TV", chevron: true },
      { label: "Kindle E-Readers & eBooks", chevron: true },
      { label: "Audible Audiobooks", chevron: true },
      { label: "Amazon Prime Video", chevron: true },
      { label: "Amazon Prime Music", chevron: true },
    ],
  },

  {
    title: "Shop by Category",
    content: [
      { label: "Mobiles, Computers", chevron: true },
      { label: "TV, Appliances, Electronics", chevron: true },
      { label: "Men's Fashion", chevron: true },
      { label: "Women's Fashion", chevron: true },
    ],
  },

  {
    title: "Programs & Features",
    content: [
      { label: "Amazon Pay", chevron: true },
      { label: "Gift Cards & Mobile Recharges", chevron: true },
      { label: "Amazon Launchpad", chevron: false },
      { label: "Amazon Business", chevron: false },
      { label: "See all", chevron: true },
    ],
  },

  {
    title: "Help & Settings",
    content: [
      { label: "Your Account", chevron: false },
      { label: "Customer Service", chevron: false },
      { label: "Sign Out", chevron: false },
    ],
  },
];
