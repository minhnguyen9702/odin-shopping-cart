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

  const addToCart = (newItem: Product) => {
    setCart((prev) => {
      const updatedCart = [...prev, newItem];
      return updatedCart;
    });
  };

  // Log the cart after it changes
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  const routes = [
    {
      path: "/",
      element: (
        <Wrapper>
          <Home />
        </Wrapper>
      ),
    },
    {
      path: "/products",
      element: (
        <Wrapper>
          <Products />
        </Wrapper>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <Wrapper>
          <ProductDetail addToCart={addToCart} />
        </Wrapper>
      ),
    },
    {
      path: "/cart",
      element: (
        <Wrapper>
          <Cart />
        </Wrapper>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
