import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

// Sample product data (you can replace with real data or import it)
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-10 mb-10">
      {/* Header Section */}
      <div className="text-center max-w-[600px] mx-auto mb-10">
        <p className="text-sm text-primary">Top Selling Products for you</p>
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="text-xs text-gray-400">
          Discover our top-selling products that customers love!
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-2 pl-10 pr-10 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 place-items-center">
        {ProductsData.map((data) => (
          <div key={data.id} className="p-2 space-y-3 rounded-md shadow-md ">
            <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold">{data.title}</h3>
              <p className="text-sm text-gray-600">Color: {data.color}</p>

              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
