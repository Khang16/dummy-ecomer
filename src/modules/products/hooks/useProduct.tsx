// src/modules/products/hooks/useProduct.tsx
import { useState, useEffect } from "react";
import { productApi } from "../../apis/product";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail?: string;
  images?: string[];
}

interface UseProductOptions {
  page?: number;
  limit?: number;
}

export const useProduct = ({
  page = 1,
  limit = 30,
}: UseProductOptions = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchProducts = async () => {
    const skip = (page - 1) * limit;
    const response = await productApi.getAll({ skip, limit }); 
    const data = response.data as { products: Product[]; total: number };
    setProducts(data.products);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchProducts();
  }, [page, limit]);

  return {
    products,
    total,
    fetchProducts,
    currentPage: page,
    itemsPerPage: limit,
  };
};