import { FakeStoreProduct } from './types'; 

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProductById = async (id: string): Promise<FakeStoreProduct> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const product: FakeStoreProduct = await response.json();
    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error; // Re-throw the error to handle it in the component if needed
  }
};

export const fetchAllProducts = async (): Promise<FakeStoreProduct[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const products: FakeStoreProduct[] = await response.json();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error; // Re-throw the error to handle it in the component if needed
  }
};
