import { StyledButton } from "./Button.style";
export interface ButtonProps {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: "small" | "large" | "medium";
  variant?: "contained" | "text" | "outlined";
  long?: boolean;
  disabled?: boolean | undefined;
}

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
