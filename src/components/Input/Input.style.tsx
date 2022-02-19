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
  ".MuiInputBase-multiline": {
    padding: 0,
  },
  ".MuiInputBase-inputMultiline": {
    minHeight: 128,
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".MuiFormHelperText-root": {
    color: "red",
  },
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: 12,
  lineHeight: "16px",
  marginBottom: theme.spacing(0.5),
  position: "static",
  transform: "none",
}));
