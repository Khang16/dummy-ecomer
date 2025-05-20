import React from "react";
import { CreateUserPage } from "./CreateUserPage";
import { ListUserPage } from "./ListUserPage";

export const userRouter = {
  path: 'user',
  children: [
    {
      path: 'create-user',
      element: <CreateUserPage></CreateUserPage>
    },
    {
      path: 'list-user',
      element: <ListUserPage></ListUserPage>
    }
  ]
}