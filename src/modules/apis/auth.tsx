import baseAdminAxios from "../../utlis/axios";

const baseRouter = 'auth/login';
export const  authApi = {
  index: (username: string, password: string)=> {
    return baseAdminAxios.post(baseRouter,{
      username,
      password
    })
  }
}