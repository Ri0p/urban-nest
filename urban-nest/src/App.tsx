import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/SignUp"; 
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import CheckoutDetailsPage from "./components/CheckoutDetailsPage";
import OrderCompletePage from "./components/OrderCompletePage";
import ContactUsPage from "./components/ContactUsPage";
import MyAccountPage from "./components/MyAccountPage";
import JewelryPage from "./components/JewelryPage";
import MensClothingPage from "./components/MensClothingPage";
import WomensClothingPage from "./components/WomensClothingPage";
import ElectronicsPage from "./components/ElectronicsPage";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import "swiper/swiper-bundle.css";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom"; 
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App = () => {
  const location = useLocation();
  const noNavbarPaths = ["/", "/signup", "/login"]; // Paths without Navbar
  const noFooterPaths = ["/", "/signup", "/login"]; // Paths without Footer
  const navigate = useNavigate(); 
  const handleSuccess = () => {
    navigate("/home"); 
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render Navbar only on specified paths */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <div className="flex-grow">
        <Routes>
          {/* Authentication and Signup routes */}
          <Route path="/" element={<Login onSuccess={handleSuccess} />} />
          <Route path="/signup" element={<Signup onSuccess={handleSuccess} />} />

          {/* Protected Routes */}
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/product/:id" element={
            <PrivateRoute>
              <ProductPage />
            </PrivateRoute>
          } />
          <Route path="/cart" element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          } />
          <Route path="/checkout" element={
            <PrivateRoute>
              <CheckoutDetailsPage />
            </PrivateRoute>
          } />
          <Route path="/order-complete" element={
            <PrivateRoute>
              <OrderCompletePage />
            </PrivateRoute>
          } />
          <Route path="/contact" element={
            <PrivateRoute>
              <ContactUsPage />
            </PrivateRoute>
          } />
          <Route path="/my-account" element={
            <PrivateRoute>
              <MyAccountPage />
            </PrivateRoute>
          } />
          <Route path="/jewelry" element={
            <PrivateRoute>
              <JewelryPage />
            </PrivateRoute>
          } />
          <Route path="/mens-clothing" element={
            <PrivateRoute>
              <MensClothingPage />
            </PrivateRoute>
          } />
          <Route path="/womens-clothing" element={
            <PrivateRoute>
              <WomensClothingPage />
            </PrivateRoute>
          } />
          <Route path="/electronics" element={
            <PrivateRoute>
              <ElectronicsPage />
            </PrivateRoute>
          } />

          {/* 404 Fallback */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      {/* Render Footer only on paths not included in noFooterPaths */}
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
};

export default AppWrapper;
