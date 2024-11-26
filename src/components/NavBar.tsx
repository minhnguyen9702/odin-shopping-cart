import { Link } from "react-router-dom";

interface NavBarProps {
  cartLength: number;
}

const NavBar: React.FC<NavBarProps> = ({ cartLength }) => {
  return (
    <>
      <Link to="/">
        <h1 className="text-center text-8xl font-semibold mb-4">BuyBye!</h1>
      </Link>
      <div className="flex justify-between p-3 border-y-2 mb-2">
        <Link to="/" className="hover:text-sky-400 md:pl-4">
          HOME
        </Link>
        <Link to="/products" className="hover:text-sky-400">
          PRODUCTS
        </Link>
        <Link to="/cart" className="hover:text-sky-400 md:pr-4 relative">
          <i className="fas fa-shopping-cart"></i> CART
          {cartLength ? (
            <div className="rounded-full bg-red-400 text-sm w-5 h-5 absolute top-[-5px] right-[-5px] flex items-center justify-center">
              {cartLength}
            </div>
          ) : null}
        </Link>
      </div>
    </>
  );
};

export default NavBar;
