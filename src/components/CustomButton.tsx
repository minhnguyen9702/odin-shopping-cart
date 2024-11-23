type CustomButtonProps = {
  str: string;
  onClick: Function;
};

const CustomButton = ({ str, onClick }: CustomButtonProps) => {
  return <button onClick={() => onClick()}>{str}</button>;
};

export default CustomButton;
