import { StyledButton } from "./Button.style";
export interface StyledButtonProps {
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

export const Button: React.FC<StyledButtonProps> = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
