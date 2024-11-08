import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import Newsletter from "../components/Newsletter";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const WomensClothingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchWomensClothing = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
        console.log("Fetched women's clothing products:", response.data); 
        setProducts(response.data.slice(0, 12)); 
      } catch (error) {
        console.error("Error fetching women's clothing products:", error);
      }
    };

    fetchWomensClothing();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#6C7275]">Women's Clothing Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}> {/* Updated link to ProductPage */}
            <div
              className="w-[256px] h-[434px] p-4 border rounded-t-md shadow-md bg-white flex flex-col justify-between"
              style={{
                borderRadius: "4px 0px 0px 0px",
                padding: "16px 8px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="text-green-600 font-semibold">IN STOCK</div>
              <div className="text-lg font-semibold mb-2 text-[#22637E]">{product.title}</div>
              <div className="text-xl font-bold text-[#22637E]">${product.price.toFixed(2)}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter Section below products */}
      <Newsletter />
    </div>
  );
};

export default WomensClothingPage;
