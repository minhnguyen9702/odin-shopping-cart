import Footer from "./Footer";
import NavBar from "./NavBar";

const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen m-2 mb-0 2xl:mx-auto max-w-screen-xl">
      <NavBar/>
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
