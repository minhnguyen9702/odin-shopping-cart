import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Wrapper from "./components/Wrapper";
import { useState, useEffect } from "react";

const App = () => {
  type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  };

  const [cart, setCart] = useState<Product[]>([]);
  const [cartLength, setCartLength] = useState<number>(cart.length)

  const addToCart = (newItem: Product) => {
    setCart((prev) => {
      const updatedCart = [...prev, newItem];
      return updatedCart;
    });
  };

  // Log the cart after it changes
  useEffect(() => {
    setCartLength(cart.length)
    console.log("Updated Cart:", cart);
  }, [cart]);

  const routes = [
    {
      path: "/",
      element: (
        <Wrapper cartLength={cartLength}>
          <Home />
        </Wrapper>
      ),
    },
    {
      path: "/products",
      element: (
        <Wrapper cartLength={cartLength}>
          <Products />
        </Wrapper>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <Wrapper cartLength={cartLength}>
          <ProductDetail addToCart={addToCart} />
        </Wrapper>
      ),
    },
    {
      path: "/cart",
      element: (
        <Wrapper cartLength={cartLength}>
          <Cart />
        </Wrapper>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
