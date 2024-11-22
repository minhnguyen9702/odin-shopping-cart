import Home from "./pages/Home";
import Products from "./pages/Products";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />
  }
];

export default routes;
