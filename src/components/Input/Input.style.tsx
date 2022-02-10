import { InputLabel, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.grey[800],
    minHeight: "48px",
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.shape.borderRadius,
    border: "none",
  },
  ".MuiInputBase-input": {
    padding: theme.spacing(1.5, 3, 1.5, 2),
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  // "&.MuiInputLabel-root": {
  color: theme.palette.grey[600],
  fontSize: 12,
  // },
}));
