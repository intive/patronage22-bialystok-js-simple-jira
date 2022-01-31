import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  minHeight: "48px",
  padding: "12px, 24px, 12px, 16px",
  backgroundColor: theme.palette.grey[50],
  borderRadius: "8px",
  border: "none",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
