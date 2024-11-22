import { Link } from "react-router-dom";

const NavBar = () => {
  return <div className="flex">
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
  </div>;
};

export default NavBar;
