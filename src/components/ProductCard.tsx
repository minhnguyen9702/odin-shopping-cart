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

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.id}
      className="border p-2 m-2 rounded-lg shadow-md hover:bg-gray-100 max-w-40 md:max-w-72 max-h-md flex flex-col justify-between"
    >
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} className="rounded-md" />
      <div>
        <p className="text-gray-700">${product.price}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
