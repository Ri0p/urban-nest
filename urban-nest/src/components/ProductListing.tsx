import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    axios.get("https://fakestoreapi.com/products/category/jewelery")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error("Error fetching jewelry:", error));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <button className="bg-[#22637E] text-white mt-4 py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
