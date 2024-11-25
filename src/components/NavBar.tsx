import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <h1 className="text-center text-6xl mb-4">BuyBye!</h1>
    <div className="flex justify-between p-3 border-y-2 mb-2">
      <Link to="/" className="hover:text-sky-400 md:pl-4">HOME</Link>
      <Link to="/products" className="hover:text-sky-400">PRODUCTS</Link>
      <Link to="/cart" className="hover:text-sky-400 md:pr-4">
        <i className="fas fa-shopping-cart"></i> CART
      </Link>
    </div>
    </>
  );
};

export default NavBar;
