import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/Layout";
import { ProtectedRoute } from "../modules/auths/components/ProtectedRouter";
import { authRouter } from "../modules/auths/index";
import { profileRouter } from "../modules/profile/index";
import { userRouter } from "../modules/users/index";
import { productRouter } from "../modules/products/index";
import { useAuth } from "../modules/auths/hooks/useAuths";

const AuthRedirect: React.FC = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/products" replace /> : <Navigate to="/products" replace />;
};

export default createBrowserRouter([
  {
    path: "/",
    element: <AuthRedirect />, 
  },
  {
    path: "/auth",
    children: authRouter, 
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      profileRouter,
      userRouter,
      productRouter,
    ],
  },
]);