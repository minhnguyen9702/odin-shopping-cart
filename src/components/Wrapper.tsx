import Footer from "./Footer";

const Wrapper = ({children}) => {
  return <div className="flex flex-col min-h-screen m-2 mb-0 2xl:mx-auto max-w-screen-xl">
    {children}
    <Footer/>
  </div>;
};

export default Wrapper
