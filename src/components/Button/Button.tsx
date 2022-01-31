import { Button as MuiButton, SxProps, Theme } from "@mui/material";
// import { theme } from "../../theme/mainTheme";
interface ButtonProps {
  children?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: "small" | "large" | "medium";
  variant?: "contained" | "text" | "outlined";
  long?: boolean;
  style?: SxProps<Theme>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  clickHandler,
  size = "small",
  variant = "contained",
  long,
  style,
}) => (
  <MuiButton
    sx={{
      ...style,
      backgroundColor: (theme) =>
        variant === "text" ? "transparent" : theme.palette.grey[800],
      py: "8px",
      px: long ? "52px" : "24px",
      mx: "5px",
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 400,
      borderRadius: (theme) => theme.shape.borderRadius,
      color:
        variant === "text"
          ? (theme) => theme.palette.text.primary
          : (theme) => theme.palette.text.secondary,
      "&:hover": {
        backgroundColor:
          variant === "text"
            ? (theme) => theme.palette.grey[100]
            : (theme) => theme.palette.grey[700],
      },
    }}
    size={size}
    variant={variant}
    onClick={clickHandler}
  >
    {children}
  </MuiButton>
);
