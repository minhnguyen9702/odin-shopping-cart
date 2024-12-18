import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import CustomError from "../components/CustomError";
import Popup from "../components/Popup";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type ProductDetailProps = {
  addToCart: (product: Product, quantity: number) => void;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <CustomError err={error} />
      </>
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
      <>
        <div className="grow md:flex justify-center">
          <div className="border md:max-w-lg p-2 flex items-center justify-center">
            <img src={product.image} alt={product.title} className="h-auto" />
          </div>
          <div className="flex flex-col md:max-w-2xl px-4">
            <h3 className="text-xl">{product.title}</h3>
            <p className="text-gray-700 text-lg">${product.price}</p>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-gray-700">{product.description}</p>
            <div className="mt-2">
              <label htmlFor="quantity">Quantity: {"  "}</label>
              <button
                className="border px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => changeQuantity(-1)}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                step="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="border rounded px-3 py-2 w-14 text-center"
              />
              <button
                className="border px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => changeQuantity(1)}
              >
                +
              </button>
            </div>
            <button
              className="my-2 px-5 py-3 rounded shadow-[3px_3px_0_black] border-2 border-black bg-gray-200 hover:bg-sky-400 md:self-end"
              onClick={() => {
                const quantityToAdd = quantity;
                addToCart(product, quantityToAdd);
                setIsPopupVisible(true);
              }}
            >
              Add to Cart
            </button>
          </div>
          <Popup
              message="Added to cart!"
              isVisible={isPopupVisible}
              onClose={() => setIsPopupVisible(false)}
            />
        </div>
      </>
    );
};

export default ProductDetail;
