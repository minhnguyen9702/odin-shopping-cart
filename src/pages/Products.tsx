import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <div className="md:flex grow justify-center items-center text-2xl font-semibold animate-pulse">
          Loading...
        </div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <div className="md:flex grow justify-center text-2xl text-red-700">
          Error: {error}
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="grow flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard product={product}/>
        ))}
      </div>
    </Wrapper>
  );
};

export default Products;
