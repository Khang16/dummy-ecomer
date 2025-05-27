import { Navigate, RouteObject } from "react-router-dom";
import { useAuth } from "./hooks/useAuths";
import { LoginPage } from "./components/LoginPage";

const AuthCheck: React.FC = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/products" replace /> : <LoginPage />;
};

export const authRouter: RouteObject[] = [
  {
    path: "login",
    element: <AuthCheck />,
  },
];