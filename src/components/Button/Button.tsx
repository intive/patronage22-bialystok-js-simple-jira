import { ButtonProps } from "@mui/material";
import { StyledButton } from "./Button.style";
export interface StyledButtonProps extends ButtonProps {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
  disabled?: boolean | undefined;
}

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
