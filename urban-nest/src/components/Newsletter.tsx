import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the subscription logic here
    console.log("Subscribed with email:", email);
    setEmail(""); // Clear the input field after subscription
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start my-8 px-4 max-w-6xl mx-auto">
      {/* Left Side Text */}
      <div className="md:w-1/2">
        <div className="text-[#22637E] font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', lineHeight: '28px' }}>
          Join Our Newsletter
        </div>
        <div className="text-gray-700 mt-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
          We love to surprise our subscribers with occasional gifts.
        </div>
      </div>

      {/* Right Side Input and Button */}
      <form onSubmit={handleSubscribe} className="flex items-center mt-4 md:mt-0 md:justify-end md:w-1/2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-[#22637E] text-white p-2 rounded-r-md hover:bg-[#1b4c6f]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
