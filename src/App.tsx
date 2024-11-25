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

  const [cart, setCart] = useState<
    Map<number, { product: Product; quantity: number }>
  >(new Map());
  const [cartLength, setCartLength] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<string>("")

  const addToCart = (newItem: Product, quantityToAdd: number) => {
    setCart((prevCart) => {
      const updatedCart = new Map(prevCart);

      if (updatedCart.has(newItem.id)) {
        const existingItem = updatedCart.get(newItem.id);
        if (existingItem) {
          updatedCart.set(newItem.id, {
            ...existingItem,
            quantity: existingItem.quantity + quantityToAdd,
          });
        }
      } else {
        updatedCart.set(newItem.id, {
          product: newItem,
          quantity: quantityToAdd,
        });
      }

      return updatedCart;
    });
  };

  const updateCart = (productId: number, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = new Map(prevCart)

      if (updatedCart.has(productId)) {
        if (newQuantity > 0) {
          const existingItem = updatedCart.get(productId)
          if (existingItem) {
            updatedCart.set(productId, {
              ...existingItem,
              quantity: newQuantity
            })
          }
        } else {
          updatedCart.delete(productId);
        }
      }
      return updatedCart
    })
  }

  useEffect(() => {
    const totalQuantity = Array.from(cart.values()).reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setCartLength(totalQuantity);
    setSubTotal(calculateSubtotal())
    console.log(cart);
  }, [cart]);

  const calculateSubtotal = () => {
    const subtotal = Array.from(cart.values()).reduce((total, { product, quantity }) => {
      return total + parseFloat(product.price) * quantity;
    }, 0);

    return subtotal.toFixed(2);
  };

  const clearCart = () => {
    setCart(new Map<number, { product: Product; quantity: number }>());
  };

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
          <Cart cart={cart} cartLength={cartLength} updateCart={updateCart} subTotal={subTotal} clearCart={clearCart}/>
        </Wrapper>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
