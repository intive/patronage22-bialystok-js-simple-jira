import { StyledButton } from "./Button.style";
export interface ButtonProps {
  children?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: "small" | "large" | "medium";
  variant?: "contained" | "text" | "outlined";
  long?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  clickHandler,
  size = "small",
  variant = "contained",
  long,
}) => (
  <StyledButton
    long={long}
    size={size}
    variant={variant}
    onClick={clickHandler}
  >
    {children}
  </StyledButton>
);
