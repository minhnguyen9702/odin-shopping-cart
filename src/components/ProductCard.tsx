import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

<Link to="/products" className="hover:text-sky-400">PRODUCTS</Link>

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}
      className="border p-2 m-2 rounded-lg shadow-md hover:ring-2 hover:ring-sky-400 max-w-40 md:max-w-72 max-h-md flex flex-col justify-between"
    >
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} className="rounded-md" />
      <div>
        <p className="text-gray-700">${product.price}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
