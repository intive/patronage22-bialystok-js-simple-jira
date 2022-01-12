import { StyledButton } from "./Button.style";

interface ButtonProps {
  child?: string;
}

export const Button: React.FC<ButtonProps> = ({ child }) => (
  <StyledButton variant="outlined">{child}</StyledButton>
);
