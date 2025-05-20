import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const AmazonCarousel = () => (
  <Slider {...settings} className="relative top-[150px]">
    <div><img src="/image1.jpg" alt="Banner 1" className="w-full h-auto object-cover "/></div>
    <div><img src="/image2.jpg" alt="Banner 2" className="w-full h-auto object-cover" /></div>
    <div><img src="/image3.jpg" alt="Banner 3" className="w-full h-auto object-cover" /></div>
  </Slider>
);

export default AmazonCarousel;

