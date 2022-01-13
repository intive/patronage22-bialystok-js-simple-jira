import { StyledButton } from "./Button.style";

interface ButtonProps {
  child?: string;
  adding: () => void;
}

export const Button: React.FC<ButtonProps> = ({ child, adding }) => (
  <StyledButton onClick={() => adding()} variant="outlined">
    {child}
  </StyledButton>
);
