import React from "react";

import ForgotPassword from "./components/ForgotPassword";
import { LoginPage } from "./components/LoginPage";

export const authRouter = {
  path: "auth",
  children: [
    {
      path: "login",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword></ForgotPassword>,
    },
  ],
};
