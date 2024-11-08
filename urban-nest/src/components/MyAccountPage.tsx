import React from "react";
import { useNavigate } from "react-router-dom";

const MyAccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    // Navigate to the login page
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row">
      {/* Left Section - Profile (Hidden on Mobile) */}
      <div className="flex-none w-full md:w-1/3 pr-8 md:block hidden">
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl text-white">
            {/* Placeholder for profile photo */}
            A
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">Account</p>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <ul>
            <li className="mb-2">
              <a
                href="#account"
                className="text-[#6C7275] hover:text-[#141718] border-b border-transparent hover:border-[#6C7275] transition"
              >
                Account
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#address"
                className="text-[#6C7275] hover:text-[#141718] border-b border-transparent hover:border-[#6C7275] transition"
              >
                Address
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#wishlist"
                className="text-[#6C7275] hover:text-[#141718] border-b border-transparent hover:border-[#6C7275] transition"
              >
                Wishlist
              </a>
            </li>
            <li className="mb-2">
              <button
                onClick={handleLogout}
                className="text-[#6C7275] hover:text-[#141718] border-b border-transparent hover:border-[#6C7275] transition"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section - Account Details and Password */}
      <div className="flex-grow">
        {/* Account Details Section */}
        <div className="mb-8">
          <h3 className="text-[#141718] text-xl font-semibold">Account Details</h3>
          <div className="mt-4">
            <label className="block text-[#6C7275] mb-1">First Name *</label>
            <input type="text" className="border border-gray-300 p-2 rounded w-full" />
          </div>
          <div className="mt-4">
            <label className="block text-[#6C7275] mb-1">Last Name *</label>
            <input type="text" className="border border-gray-300 p-2 rounded w-full" />
          </div>
          <div className="mt-4">
            <label className="block text-[#6C7275] mb-1">Display Name *</label>
            <input type="text" className="border border-gray-300 p-2 rounded w-full" />
            <p className="text-xs text-[#6C7275] mt-1">
              This will be how your name will be displayed in the account section and in reviews.
            </p>
          </div>
          <div className="mt-4">
            <label className="block text-[#6C7275] mb-1">Email *</label>
            <input type="email" className="border border-gray-300 p-2 rounded w-full" />
          </div>
        </div>

        {/* Password Section */}
        <div>
          <h3 className="text-[#141718] text-xl font-semibold">Password</h3>
          <div className="mt-4">
            <label className="block text-[#6C7275] mb-1">Old Password</label>
            <input type="password" className="border border-gray-300 p-2 rounded w-full" />
          </div>
          <div className="mt-4">
            <label className="block text-[#6C7275] mb-1">New Password</label>
            <input type="password" className="border border-gray-300 p-2 rounded w-full" />
          </div>
          <div className="mt-4">
            <label className="block text-[#6C7275] mb-1">Repeat New Password</label>
            <input type="password" className="border border-gray-300 p-2 rounded w-full" />
          </div>
          <button className="mt-4 bg-[#22637E] text-white py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
