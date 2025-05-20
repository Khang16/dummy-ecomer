import baseAdminAxios from "../../utlis/axios";

const baseRouter = 'products';

export const productApi = {
  getAll: (params?: { skip?: number; limit?: number }) => {
    return baseAdminAxios.get('products', { params }); // Truyền params vào axios
  },
};