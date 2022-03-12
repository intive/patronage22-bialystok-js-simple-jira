import { InputLabel, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.grey[50],
    minHeight: "48px",
    borderRadius: theme.shape.borderRadius,
  },
  ".MuiInputBase-input": {
    padding: theme.spacing(1.5, 3, 1.5, 2),
  },

  ".MuiFilledInput-root": {
    "&:hover": {
      "&:before": {
        border: "none",
      },
    },
    "&:after, &:before": {
      border: "none",
    },
  },
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: 12,
  lineHeight: "16px",
  marginBottom: theme.spacing(0.5),

  "&.outlined": {
    marginBottom: theme.spacing(2),
  },
}));
