import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuths";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user && location.pathname === "/products") {
    return children ? <>{children}</> : <Outlet />;
  }
  if (!user) {
    return <Navigate to="/products" replace />;
  }

  // Allow authenticated users to access protected routes
  return children ? <>{children}</> : <Outlet />;
};