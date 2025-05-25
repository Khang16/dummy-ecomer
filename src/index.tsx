import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import  "./modules/scss/index.scss"
import { Provider } from "react-redux";
import { store } from "./modules/reduxs/auths/store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// const linkElement = screen.getByText(/learn react/i);

reportWebVitals();
