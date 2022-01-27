import { Button as MuiButton } from "@mui/material";
import { Button } from "./Button.styled";

interface ButtonProps {
  children?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: string;
  variant?: "contained" | "text" | "outlined";
}

export const StyledButton: React.FC<ButtonProps> = (props) => (
  <Button>{props.children}</Button>
);
