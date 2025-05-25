import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../apis/auth";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "../../reduxs/auths/authSlice";
import { useAppDispatch, useAppSelector } from "../../reduxs/auths/store";

interface AuthResponse {
  accessToken: string;
  id: number;
  username: string;
  email: string;
}

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      dispatch(loginSuccess({ user: userData, token }));
    }
  }, [dispatch, user]);

  const handleLogin = async (username: string, password: string) => {
    dispatch(loginStart());
    try {
      const response = await authApi.index(username, password);
      const data = response.data as AuthResponse;

      if (data.accessToken) {
        const { accessToken, ...userData } = data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userData,
            id: String(userData.id),
          })
        );
        dispatch(
          loginSuccess({
            user: {
              ...userData,
              id: String(userData.id),
            },
            token: accessToken,
          })
        );
        return { success: true };
      }
      return { success: false, error: "Invalid credentials" };
    } catch (err) {
      dispatch(loginFailure("Login failed"));
      return { success: false, error: "Login failed" };
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return {
    user,
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout,
  };
};
