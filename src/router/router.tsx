import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layout/Layout';
import { ProtectedRoute } from '../modules/auths/components/ProtectedRouter';
import { authRouter } from '../modules/auths/index';
import { profileRouter } from '../modules/profile/index';
import { userRouter } from '../modules/users/index';
import { productRouter } from '../modules/products/index';

export default createBrowserRouter([
  {
    path: "/",
    children: [
      authRouter,
      {
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <Navigate to="/user/list-user" replace />,
          },
          profileRouter,
          userRouter,
          productRouter,
        ],
      },
    ],
  },
]);
