import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaArrowRight } from 'react-icons/fa';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

const ProductCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="product-carousel flex flex-col items-center mx-auto max-w-6xl px-4">
      <div className="flex justify-between items-center mb-4 w-full">
        <h2 className="text-[#141718] font-bold text-2xl">New Arrivals</h2>
        <Link to="/more-products" className="flex items-center text-black underline">
          <span className="mr-1">More Products</span>
          <FaArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
            style={{
              width: '300px',
              height: '500px', 
              minWidth: '260px', 
            }}
          >
            {/* Link wrapping entire product card */}
            <Link to={`/product/${product.id}`} className="w-full h-full flex flex-col items-center">
              {/* Product Image */}
              <div
                className="product-image"
                style={{
                  width: '300px',  
                  height: '350px', 
                  borderRadius: '8px 8px 0 0',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-full w-full space-y-2">
                <div className="flex justify-between items-center w-full mb-1">
                  <h3 className="text-lg font-semibold text-[#141718] leading-tight">{product.title}</h3>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(product.id);
                    }}
                    className={`p-1 rounded-full ${favorites.includes(product.id) ? 'text-blue-500' : 'text-gray-400'}`}
                  >
                    <FaHeart className="h-5 w-5" />
                  </button>
                </div>
                {/* Price Section */}
                <p className="text-gray-600 font-medium text-sm mb-1">
                  Price: <span className="font-bold">${product.price}</span>
                </p>
                {/* Rating Section */}
                <div className="flex items-center text-sm">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`h-4 w-4 ${index < Math.floor(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-500">({product.rating.count})</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
