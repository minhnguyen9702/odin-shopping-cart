import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useParams } from "react-router-dom";
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

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((json) => {
          setProduct(json);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <CustomError err="error" />
      </Wrapper>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const changeQuantity = (value: number) => {
    setQuantity((prev) => prev + value);
  };

  if (product)
    return (
      <Wrapper>
        <div className="grow md:flex justify-center">
          <div className="border md:max-w-lg p-2 flex items-center justify-center">
            <img src={product.image} alt={product.title} className="h-auto" />
          </div>
          <div className="flex flex-col md:max-w-2xl px-4">
            <h3 className="text-xl">{product.title}</h3>
            <p className="text-gray-700 text-lg">${product.price}</p>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-gray-700">{product.description}</p>
            <div className="space-x-2 mt-2">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                step="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="border rounded px-3 py-2 w-20 text-center"
              />
              <button
                className="md:hidden px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-400"
                onClick={() => changeQuantity(-1)}
              >
                -
              </button>
              <button 
                className="md:hidden px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-400"
                onClick={() => changeQuantity(1)}>
                +
              </button>
            </div>
            <button
              className="my-2 px-6 py-4 rounded-lg bg-gray-200 hover:bg-gray-400 md:self-end"
              onClick={() =>
                console.log(`${quantity} ` + "Items added to cart")
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Wrapper>
    );
};

export default ProductDetail;
