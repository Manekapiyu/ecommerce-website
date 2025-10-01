import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopProduct = () => {

  return (
    <div className='container'>
      {/* Header section */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated Products For You
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
              Discover our top-rated products
            </p>
          </div>
    </div>
  );
}

export default TopProduct;
