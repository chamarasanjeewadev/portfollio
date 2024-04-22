type ButtonProps = {
  handleClick: () => void;
  buttonText: string;
};
export const Button = ({ handleClick, buttonText }: ButtonProps) => {
  return <button onClick={handleClick}>{buttonText}</button>;
};
