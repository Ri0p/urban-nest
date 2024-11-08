import React from 'react';
import { FaTruck, FaMoneyBillWave, FaLock, FaHeadset } from 'react-icons/fa';

const ValuesSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* First Card */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg" style={{ width: '262px', height: '220px', padding: '48px 32px' }}>
          <FaTruck className="text-4xl mb-2" />
          <h3 className="text-lg font-medium">Free Shipping</h3>
          <p className="text-center">Order above $150</p>
        </div>

        {/* Second Card */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg" style={{ width: '262px', height: '220px', padding: '48px 32px' }}>
          <FaMoneyBillWave className="text-4xl mb-2" />
          <h3 className="text-lg font-medium">Money-back</h3>
          <p className="text-center">30 days guarantee</p>
        </div>

        {/* Third Card */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg" style={{ width: '262px', height: '220px', padding: '48px 32px' }}>
          <FaLock className="text-4xl mb-2" />
          <h3 className="text-lg font-medium">Secure Payments</h3>
          <p className="text-center">Secured by Stripe</p>
        </div>

        {/* Fourth Card */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg" style={{ width: '262px', height: '220px', padding: '48px 32px' }}>
          <FaHeadset className="text-4xl mb-2" />
          <h3 className="text-lg font-medium">24/7 Support</h3>
          <p className="text-center">Phone and Email support</p>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
