import React from 'react';
import { Link } from 'react-router-dom';
import leftImage from '../assets/Jewelery.svg.svg';
import rightTopImage from '../assets/Men.svg.svg';
import rightBottomImage from '../assets/Women.svg.svg';

const BannerGrid: React.FC = () => {
  return (
    <div
      className="banner-grid mx-auto p-4 flex justify-center"
      style={{
        maxWidth: "1440px",
        display: 'grid',
        gridTemplateColumns: "1fr",
      }}
    >
      {/* Large screen layout */}
      <div
        className="hidden md:grid md:grid-cols-[548px_592px] md:gap-4 justify-center" 
        style={{ height: "598px" }}
      >
        {/* Left Photo */}
        <div
          className="relative"
          style={{
            width: "548px",
            height: "100%",
          }}
        >
          <img src={leftImage} alt="Jewelry" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 text-[#141718]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h2 className="text-3xl font-semibold">Jewelry</h2>
            <Link
              to="/jewelry"
              className="text-lg font-medium mt-2 flex items-center underline"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Right Photos */}
        <div className="flex flex-col gap-4"> 
          {/* Top Right Photo */}
          <div className="relative" style={{ width: "100%", height: "287px" }}>
            <img src={rightTopImage} alt="Men's Clothing" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 text-[#141718]">
              <h2 className="text-3xl font-semibold">Men's Clothing</h2>
              <Link
                to="/mens-clothing"
                className="text-lg font-medium mt-2 flex items-center underline"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Bottom Right Photo */}
          <div className="relative" style={{ width: "100%", height: "287px" }}>
            <img src={rightBottomImage} alt="Women's Clothing" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 text-[#141718]">
              <h2 className="text-3xl font-semibold">Women's Clothing</h2>
              <Link
                to="/womens-clothing"
                className="text-lg font-medium mt-2 flex items-center underline"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Small screen layout */}
      <div className="md:hidden grid gap-4">
        {[leftImage, rightTopImage, rightBottomImage].map((image, index) => (
          <div key={index} className="relative" style={{ width: "100%", height: "300px" }}>
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 text-[#141718]">
              <h2 className="text-2xl font-semibold">
                {index === 0 ? "Jewelry" : index === 1 ? "Men's Clothing" : "Women's Clothing"}
              </h2>
              <Link
                to={index === 0 ? "/jewelry" : index === 1 ? "/mens-clothing" : "/womens-clothing"}
                className="text-lg font-medium mt-2 flex items-center underline"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerGrid;
