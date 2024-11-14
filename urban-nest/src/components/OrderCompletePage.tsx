import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderCompletePage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">Complete!</h1>

      <div className="flex justify-between items-center mt-6 w-full max-w-md">
        {/* Step 1 - Completed */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-[#22637E] rounded-full flex items-center justify-center mb-1">
            <span className="text-white">✔</span>
          </div>
          <span className="text-center text-[#22637E]">Shopping cart</span>
          <div className="w-full h-[2px] bg-[#22637E] mt-1" />
        </div>

        {/* Step 2 - Completed */}
        <div className="flex flex-col items-center mx-4">
          <div className="w-8 h-8 bg-[#22637E] rounded-full flex items-center justify-center mb-1">
            <span className="text-white">✔</span>
          </div>
          <span className="text-center text-[#22637E]">Checkout details</span>
          <div className="w-full h-[2px] bg-[#22637E] mt-1" />
        </div>

        {/* Step 3 - Current */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-[#22637E] rounded-full flex items-center justify-center mb-1">
            <span className="text-white">3</span>
          </div>
          <span className="text-center text-[#22637E]">Order complete</span>
          <div className="w-full h-[2px] bg-[#22637E] mt-1" />
        </div>
      </div>
      
      {/* Order Completion Message */}
      <div className="text-center mt-8">
        <h2 className="text-xl font-bold text-[#6C7275]">Thank you! 🎉</h2>
        <h3 className="text-2xl font-semibold text-[#22637E] mt-2">Your order has been received</h3>
        
        {/* Order Details */}
        <div className="mt-4 text-[#6C7275]">
          <p className="text-black">Order code: #12345</p>
          <p className="text-black">Date: November 14, 2024</p>
          <p className="text-black">Total: {location.state.grandTotal}</p>
          <p className="text-black">Payment method: Credit Card</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCompletePage;
