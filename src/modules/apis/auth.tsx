import baseAdminAxios from "../../utlis/axios";

const baseRouterLogin = 'auth/login';
const baseRouterMe = 'auth/me';

export const  authApi = {
  index: (username: string, password: string)=> {
    return baseAdminAxios.post(baseRouterLogin,{
      username,
      password
    })
  },

  getMe: ()=>{
    return baseAdminAxios.get(baseRouterMe)
  }
}