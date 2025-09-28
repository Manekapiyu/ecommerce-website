import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's wear",
    description:
      "Discover the latest collection of shirts, jeans, jackets, and more at unbeatable prices. Upgrade your wardrobe today with premium styles for less!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off all Women's wear",
    description:
      "Shop the latest trends in women's fashion with our exclusive 30% discount. From dresses to accessories, find your perfect style today!",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Don't miss out on our biggest sale yet! Enjoy 70% off on a wide range of products. Shop now and save big!",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center order-2 gap-4 pt-4 text-center sm:pt-0 sm:text-left sm:order-1">
                <h1 className="text-5xl font-bold sm:text-5xl lg:text-7xl">
                  Upgrade Your Style Today!
                </h1>
                <p className="pt-6 text-sm">
                  Discover the latest trends in men's and women's fashion. Shop
                  now and get up to 50% off on selected items. Premium quality,
                  unbeatable prices!
                </p>
                <button className="px-4 py-2 mt-2 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105">
                  Order Now
                </button>
              </div>

              {/* image section */}
              <div className="order-1 sm:order-2">
                <img
                  src={Image1}
                  alt="Hero"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain sm:scale-105 lg:scale-110"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
