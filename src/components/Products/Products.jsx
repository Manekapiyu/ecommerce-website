import React from "react";
import Img1 from "../../assets/women/women5.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/men.jpg";

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
      img: Img5,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img3,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img4,
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
        {ProductsData.map((data) => (
          <div key={data.id} className="p-2 rounded-md shadow-md">
            <img
              src={data.img}
              alt=""
              className="h-[250px] w-[200px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
