import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import CustomError from "../components/CustomError";

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
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState("default");
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
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading) return;

    let sorted: Product[] = products;
    if (sortOrder === "price-asc") {
      sorted = [...products].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sortOrder === "price-desc") {
      sorted = [...products].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    } else if (sortOrder === "alphabetical-asc") {
      sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "alphabetical-desc") {
      sorted = [...products].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "default") {
      sorted = [...products].sort((a, b) => a.id - b.id);
    }

    setSortedProducts(sorted);
  }, [products, sortOrder, loading]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setSortOrder(order);
  };

  if (loading) {
    return (
      <Wrapper>
        <Loading/>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <CustomError err={error}/>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <select
        onChange={handleSortChange}
        value={sortOrder}
        className="p-2 border rounded-md shadow-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="alphabetical-asc">Name: A-Z</option>
        <option value="alphabetical-desc">Name: Z-A</option>
      </select>
      <div className="grow flex flex-wrap justify-center">
        {sortedProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Products;
