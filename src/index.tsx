import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import  "./modules/scss/index.scss"

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router}></RouterProvider>);

reportWebVitals();
