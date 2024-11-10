import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa'; // Importing the trash icon from react-icons

const CheckoutDetailsPage: React.FC = () => {
  const { cartItems, updateItemQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5; 
  const tax = totalPrice * 0.1; 
  const grandTotal = totalPrice + shipping + tax; 

  if (cartItems.length === 0) {
    return <div className="p-4">Your cart is empty.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">Check Out</h1>

      {/* Step Indicators */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-col items-center mx-4">
          <div className="w-8 h-8 bg-[#22637E] rounded-full flex items-center justify-center mb-1">
            <span className="text-white">✔</span> {/* Ticked Circle in White */}
          </div>
          <span className="text-center text-[#22637E]">Shopping cart</span>
        </div>
        <div className="w-16 h-[2px] bg-[#22637E]" />

        <div className="flex flex-col items-center mx-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-1">
            <span className="text-white">2</span> {/* Circle for current step */}
          </div>
          <span className="text-center text-black">Checkout details</span>
        </div>
        <div className="w-16 h-[2px] bg-black" />

        <div className="flex flex-col items-center mx-4">
          <div className="w-8 h-8 bg-[#6C7275] rounded-full flex items-center justify-center mb-1">
            <span className="text-white">3</span> {/* Circle for pending step */}
          </div>
          <span className="text-center text-[#6C7275]">Order complete</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-8 space-y-4 md:space-y-0">
        {/* Contact Information Box */}
        <div className="w-full md:w-1/2">
          <div className="border rounded p-4">
            <h2 className="text-xl font-bold">Contact Information</h2>
            <div className="mt-2">
              <label className="block">First Name:</label>
              <input type="text" className="border p-2 w-full" required />
            </div>
            <div className="mt-2">
              <label className="block">Last Name:</label>
              <input type="text" className="border p-2 w-full" required />
            </div>
            <div className="mt-2">
              <label className="block">Phone Number:</label>
              <input type="tel" className="border p-2 w-full" required />
            </div>
            <div className="mt-2">
              <label className="block">Email Address:</label>
              <input type="email" className="border p-2 w-full" required />
            </div>
          </div>

          {/* Shipping Address Box */}
          <div className="border rounded p-4 mt-4">
            <h2 className="text-xl font-bold">Shipping Address</h2>
            <div className="mt-2">
              <label className="block">Street Address:</label>
              <input type="text" className="border p-2 w-full" required />
            </div>
            <div className="mt-2">
              <label className="block">Country:</label>
              <select className="border p-2 w-full" required>
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="block">Town / City:</label>
              <input type="text" className="border p-2 w-full" required />
            </div>
            <div className="mt-2">
              <label className="block">ZIP Code:</label>
              <input type="text" className="border p-2 w-full" required />
            </div>
          </div>

          {/* Payment Method Box */}
          <div className="border rounded p-4 mt-4">
            <h2 className="text-xl font-bold">Payment Method</h2>
            <div className="mt-2">
              <label className="block">Choose a payment method:</label>
              <div className="flex items-center mt-2">
                <input type="radio" id="card" name="payment" value="card" className="mr-2" />
                <label htmlFor="card" className="mr-4">Pay by Card</label>
                <span className="mr-4">💳</span> {/* Card Icon */}
              </div>
              <div className="flex items-center">
                <input type="radio" id="paypal" name="payment" value="paypal" className="mr-2" />
                <label htmlFor="paypal">PayPal</label>
              </div>
            </div>
            <div className="mt-2">
              <label className="block">Card Number:</label>
              <input type="text" className="border p-2 w-full" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <label className="block">Expiration Date:</label>
                <input type="text" placeholder="MM/YY" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block">CVC:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="w-full md:w-1/3">
          <div className="border rounded p-4 mt-4 md:mt-0">
            <h2 className="text-xl font-bold">Order Summary</h2>
            {cartItems.map((item: any) => (
              <div key={item.id} className="flex justify-between items-center my-2">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-2" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>{item.title}</span>
                    <button 
                      className="text-red-500"
                      onClick={() => removeItem(item.id)} 
                    >
                      <FaTrashAlt /> {/* Red Garbage Icon */}
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Price: ${(item.price).toFixed(2)}</span>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-300 px-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)} 
                        disabled={item.quantity <= 1} 
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-gray-300 px-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)} 
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4 font-bold">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button" 
        className="mt-4 bg-[#22637E] text-white py-2 px-4 rounded"
        onClick={() => navigate('/order-complete',{
          state:{
          grandTotal: grandTotal
        }})} 
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutDetailsPage;
