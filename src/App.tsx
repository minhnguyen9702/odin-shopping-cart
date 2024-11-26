import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Wrapper from "./components/Wrapper";

const routes = [
  {
    path: "/",
    element: <Wrapper><Home /></Wrapper>,
  },
  {
    path: "/products",
    element: <Wrapper><Products /></Wrapper>,
  },
  {
    path: "/products/:id",
    element: <Wrapper><ProductDetail /></Wrapper>
  },
  {
    path: "/cart",
    element: <Wrapper><Cart /></Wrapper>,
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;