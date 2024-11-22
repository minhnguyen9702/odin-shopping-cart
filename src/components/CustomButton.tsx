type CustomButtonProps = {
  onClick: Function;
};

const CustomButton = ({ onClick }: CustomButtonProps) => {
  return <button onClick={() => onClick()}>Click Me</button>;
};

export default CustomButton;
