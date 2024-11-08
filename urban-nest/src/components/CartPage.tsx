import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { useParams, useNavigate } from 'react-router-dom';
import { FaLock, FaTrash } from 'react-icons/fa';
import { FakeStoreProduct } from '../types'; 
import { fetchProductById } from '../api';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, addToCart, decrementQuantity } = useContext(CartContext);
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<FakeStoreProduct | null>(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (id) {
      fetchProductById(id)
        .then(setProduct)
        .catch((error) => console.error("Failed to fetch product:", error));
    }
  }, [id]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5; 
  const tax = totalPrice * 0.1; 
  const grandTotal = totalPrice + shipping + tax;

  if (product) {
    
    return (
      <div className="p-4 flex flex-col md:flex-row justify-between items-start">
        <img src={product.image} alt={product.title} className="w-48 h-48 object-cover" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">Price: ${product.price.toFixed(2)}</p>
          <div className="flex mt-4 space-x-4">
            <button
              onClick={() => {
                addToCart(product);
                navigate('/cart'); 
              }}
              className="bg-[#22637E] text-white py-2 px-4 rounded"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product);
                navigate('/checkout'); 
              }}
              className="bg-green-600 text-white py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  
  if (cartItems.length === 0) {
    return <div className="p-4">Your cart is empty.</div>;
  }

  return (
    <div className="p-4 flex flex-col md:flex-row justify-between">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between my-4">
              {/* Product image */}
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              
              {/* Product title, price, and quantity controls */}
              <div className="flex-grow flex items-center justify-between ml-4">
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity control and remove button */}
                <div className="flex items-center space-x-4">
                  {/* Remove Button (Garbage Icon) */}
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="text-lg text-red-500 hover:text-red-700"
                  >
                    <FaTrash /> {/* Garbage icon */}
                  </button>

                  {/* Quantity control */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decrementQuantity(item.id)} 
                      className="bg-gray-300 text-lg p-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="w-12 text-center border border-gray-300 p-1"
                    />
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gray-300 text-lg p-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Order Summary Section */}
      <div className="bg-gray-100 p-6 rounded shadow-md mt-4 md:mt-0 w-full md:w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between text-lg mb-2">
          <span>Price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg mb-2">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg mb-2">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl mb-4">
          <span>Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-[#22637E] text-white font-bold py-2 mt-4 flex items-center justify-center"
          onClick={() => navigate('/checkout')}
        >
          <FaLock className="mr-2" /> Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
