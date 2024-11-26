import Empty from "../components/Empty";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type CartProps = {
  cart: Product[];
  cartLength: number;
};

const Cart: React.FC<CartProps> = ({ cart, cartLength }) => {
  if (cartLength === 0) return <Empty />;

  return (
    <div className="grow">
    </div>
  );
};

export default Cart;
