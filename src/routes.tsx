import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
