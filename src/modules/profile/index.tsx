import React from "react";
import { ProfileModules } from "./ProfilePage";

export const profileRouter = {
  path: 'profile',
  children: [
    {
      path: 'personal-info',
      element: <ProfileModules></ProfileModules>
    },
    
  ]
}