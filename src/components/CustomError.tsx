interface ErrorProps {
    err: string;
  }

const CustomError = ({ err }: ErrorProps) => {
  return (
    <div className="md:flex grow justify-center text-2xl text-red-700">
      Error: {err}
    </div>
  );
};

export default CustomError;
