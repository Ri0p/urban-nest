import React from 'react';
import Slider from './Slider';
import BannerGrid from './BannerGrid';
import ProductCarousel from './ProductCarousel';
import ValuesSection from './ValuesSection';
import Newsletter from './Newsletter';

const Home: React.FC = () => {
  return (
    <div>
      {/* Slider Section */}
      <section>
        <Slider />
      </section>

      {/* Text Below Slider */}
      <section className="flex flex-col md:flex-row justify-center items-center my-8 px-4 max-w-6xl mx-auto">
        <div 
          className="md:w-1/2 text-[#22637E] font-bold" 
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '64px', fontWeight: 500, lineHeight: '76px', letterSpacing: '-2px', textAlign: 'left' }}
        >
          {/* Display different text for mobile and larger screens */}
          <span className="block md:hidden">Simply Unique, Simply Better.</span>
          <span className="hidden md:block">Purely Distinct / Purely Superior.</span>
        </div>
        <div 
          className="md:w-1/2 text-gray-700 mt-4 md:mt-0" 
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '19px', fontWeight: 600, lineHeight: '26px', textAlign: 'left' }}
        >
          Purely Distinct is a gift and decorations store based in Skopje, Macedonia. Established in 2024.
        </div>
      </section>

      {/* Banner Grid Section */}
      <section>
        <BannerGrid />
      </section>

      {/* Product Carousel Section */}
      <section>
        <ProductCarousel />
      </section>

      {/* Values Section */}
      <section>
        <ValuesSection />
      </section>

      {/* Newsletter Section */}
      <section>
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
