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
  cart: Map<number, { product: Product; quantity: number }>;
  cartLength: number;
  updateCart: (productId: number, newQuantity: number) => void;
  subTotal: string;
  clearCart: () => void;
};

const Cart: React.FC<CartProps> = ({
  cart,
  cartLength,
  updateCart,
  subTotal,
  clearCart,
}) => {
  if (cartLength === 0) return <Empty />;

  return (
    <div className="grow">
      {cartLength === 1 ? (
        <h2 className="text-lg">Cart ({cartLength} item)</h2>
      ) : (
        <h2 className="text-lg">Cart ({cartLength} items)</h2>
      )}
      {Array.from(cart.values()).map(({ product, quantity }) => (
        <div key={product.id} className="md:flex justify-between my-4">
          <div className="flex justify-start">
            <div className="border p-2 flex items-center justify-center min-h-48 md:min-h-96">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain max-w-32 md:max-w-64"
              />
            </div>
            <div className="p-2">
              <h3 className="text-lg">{product.title}</h3>
              <button
                className="text-red-600 hover:text-red-500"
                onClick={() => updateCart(product.id, 0)}
              >
                Remove Item
              </button>
            </div>
          </div>
          <div className="flex justify-between my-4 space-x-8 md:px-4">
            <p className="py-2 text-gray-700">Price: ${product.price}</p>
            <label>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10);
                  updateCart(product.id, newQuantity);
                }}
                className="border rounded px-3 py-2 w-16 md:w-20 text-center"
              />
            </label>
            <p className="py-2 text-gray-700">
              Total Price: ${(parseFloat(product.price) * quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
      <div className="text-lg text-right">Subtotal : {subTotal}</div>
      <div className="space-x-4 flex justify-end my-2">
        <button
          onClick={clearCart}
          className="px-5 py-3 rounded bg-gray-200 border-2 border-black hover:bg-gray-400"
        >
          Clear Items
        </button>
        <button className="px-5 py-3 rounded border-2 border-black bg-sky-200 hover:bg-sky-400">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
