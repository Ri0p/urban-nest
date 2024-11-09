import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import { CartContext } from '../components/CartContext';
import { fetchProductById } from '../api';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: { rate: number; count: number };
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const cartContext = useContext(CartContext);
  const addToCart = cartContext?.addToCart; 
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id!);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleAddToCart = () => {
    if (selectedSizes.length === 0) {
      alert('Please select at least one size.');
      return;
    }
    if (addToCart) {
      const cartItem = {
        ...product,
        selectedSizes,
        quantity,
      };
      addToCart(cartItem);
      alert('Product added to cart!');
    } else {
      console.error('Add to cart function is not available.');
    }
  };

  const toggleFavorite = () => {
    setFavorited((prevFavorited) => !prevFavorited);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-xs md:max-w-md rounded-lg"
        />

        <div className="flex flex-col md:w-1/2 gap-4 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold text-[#22637E]">{product.title}</h2>
          <p className="text-xl text-gray-600">Price: ${product.price}</p>

          <div className="flex items-center gap-2">
            <p className="text-gray-800">{product.description}</p>
            <button onClick={toggleFavorite}>
              <FaHeart className={`text-2xl ${favorited ? 'text-[#22637E]' : 'text-gray-400'}`} />
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Size</h3>
            <div className="flex gap-2 mt-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`border p-2 rounded ${
                    selectedSizes.includes(size) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Shipping</h3>
            <p>Delivery Time: 3–5 days</p>
          </div>

          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold">Quantity</h3>
            <div className="flex items-center gap-2">
              <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 border">
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 border">
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-[#22637E] text-white px-4 py-2 rounded">BUY NOW</button>
            <button
              onClick={handleAddToCart}
              className="flex items-center border px-4 py-2 rounded gap-2"
            >
              <FaShoppingBag className="text-gray-600" />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
