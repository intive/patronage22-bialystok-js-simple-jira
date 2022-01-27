import { Button as MuiButton, ThemeProvider } from "@mui/material";
// import { theme } from "../../theme/mainTheme";
interface ButtonProps {
  children?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: string;
  variant?: "contained" | "text" | "outlined";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  clickHandler,
  size,
  variant = "contained",
}) => (
  // <ThemeProvider theme={theme}>
  <MuiButton
    sx={{
      backgroundColor: (theme) =>
        variant === "text" ? "transparent" : theme.palette.grey[800],
      py: "8px",
      px: size === "long" ? "52px" : "24px",
      fontSize: 16,
      fontWeight: 400,
      borderRadius: 2,
      "&:hover": {
        backgroundColor: (theme) => theme.palette.grey[700],
      },
    }}
    size='small'
    variant={variant}
    onClick={clickHandler}
  >
    {children}
  </MuiButton>
  // </ThemeProvider>
);
//TODO: Check BaseButton since theres a lot to override. Also try solution with styled()
