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
  
  if (product) return (
    <Wrapper>
      <div className="grow">
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} className="rounded-md" />
        <div>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
