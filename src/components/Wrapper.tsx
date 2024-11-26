import Footer from "./Footer";
import NavBar from "./NavBar";

interface WrapperProps {
  children: React.ReactNode;
  cartLength: number;
}

const Wrapper : React.FC<WrapperProps> = ({ children, cartLength }) => {
  return (
    <div className="flex flex-col min-h-screen m-2 mb-0 2xl:mx-auto max-w-screen-xl">
      <NavBar cartLength={cartLength}/>
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
