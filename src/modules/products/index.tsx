import path from "path";
import { ProductList } from "./components/ProductList";

export const productRouter = {
  path: 'products',
  children: [
    {
      path: '',
      element: <ProductList></ProductList>
    }
  ]
}