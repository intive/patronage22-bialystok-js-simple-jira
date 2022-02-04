import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "long" && prop !== "variant",
})<{ long?: boolean; variant?: string }>(({ theme, long, variant }) => ({
  backgroundColor: variant === "text" ? "transparent" : theme.palette.grey[700],
  padding: "8px",
  paddingLeft: long ? "52px" : "24px",
  paddingRight: long ? "52px" : "24px",
  margin: "0 5px",
  fontSize: 16,
  lineHeight: "24px",
  fontWeight: 400,
  borderRadius: theme.shape.borderRadius,
  color:
    variant === "text"
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
  textTransform: "none",
  "&:hover": {
    backgroundColor:
      variant === "text" ? theme.palette.grey[100] : theme.palette.grey[600],
  },
}));
