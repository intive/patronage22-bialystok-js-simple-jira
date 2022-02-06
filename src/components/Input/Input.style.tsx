import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: theme.palette.grey[800],
  minHeight: "48px",
  padding: theme.spacing(1.5, 3, 1.5, 2),
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.shape.borderRadius,
  border: "none",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
