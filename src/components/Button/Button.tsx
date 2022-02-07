import { ButtonProps } from "@mui/material";
import { StyledButton } from "./Button.style";
export interface StyledButtonProps extends ButtonProps {
  children?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  size?: "small" | "large" | "medium";
  variant?: "contained" | "text" | "outlined";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  long?: boolean;
}

export const Button: React.FC<StyledButtonProps> = ({
  children,
  clickHandler,
  size,
  variant,
  color,
  long,
}) => (
  <StyledButton
    long={long}
    size={size}
    color={color}
    variant={variant}
    onClick={clickHandler}
  >
    {children}
  </StyledButton>
);
