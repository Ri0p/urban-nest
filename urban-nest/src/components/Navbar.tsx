import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'text-[#22637E] hover:text-[#22637E]'
      : 'text-[#6C7275] hover:text-[#22637E]';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-[#6C7275]" /> : <FaBars className="text-[#6C7275]" />}
          </button>
        </div>

        {/* Brand Name for Mobile */}
        <div className="text-[#22637E] text-2xl font-bold text-center flex-grow md:hidden">
          UrbanNest
        </div>

        {/* Bag Icon for Mobile */}
        <div className="md:hidden">
          <Link to="/cart" onClick={toggleMenu}>
            <FaShoppingBag className="text-[#6C7275] hover:text-[#22637E] cursor-pointer" />
          </Link>
        </div>

        {/* Brand Name for Desktop */}
        <div className="hidden md:flex text-[#22637E] text-2xl font-bold">
          UrbanNest
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/home" className={getLinkClass('/home')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/jewelry" className={getLinkClass('/jewelry')}>
              Jewelry
            </Link>
          </li>
          <li>
            <Link to="/mens-clothing" className={getLinkClass('/mens-clothing')}>
              Men's Clothing
            </Link>
          </li>
          <li>
            <Link to="/womens-clothing" className={getLinkClass('/womens-clothing')}>
              Women's Clothing
            </Link>
          </li>
          <li>
            <Link to="/electronics" className={getLinkClass('/electronics')}>
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Icons on Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="text-[#6C7275] hover:text-[#22637E] cursor-pointer" />
          <Link to="/my-account">
            <FaUser className="text-[#6C7275] hover:text-[#22637E] cursor-pointer" />
          </Link>
          <Link to="/cart">
            <FaShoppingBag className="text-[#6C7275] hover:text-[#22637E] cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
            <ul className="flex flex-col p-4 space-y-2">
              {/* Search Icon */}
              <li className="flex items-center">
                <FaSearch className="text-[#6C7275] hover:text-[#22637E] cursor-pointer" />
              </li>
              {/* Navigation Links for Mobile */}
              <li>
                <Link to="/home" className={getLinkClass('/home')} onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jewelry" className={getLinkClass('/jewelry')} onClick={toggleMenu}>
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/mens-clothing" className={getLinkClass('/mens-clothing')} onClick={toggleMenu}>
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/womens-clothing" className={getLinkClass('/womens-clothing')} onClick={toggleMenu}>
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link to="/electronics" className={getLinkClass('/electronics')} onClick={toggleMenu}>
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/contact" className={getLinkClass('/contact')} onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/my-account" onClick={toggleMenu}>
                  <FaUser className="text-[#6C7275] hover:text-[#22637E] cursor-pointer" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
