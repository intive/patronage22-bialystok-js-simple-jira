import { Box, InputLabel, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

export const StyledLoginTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.grey[800],
    height: "48px",
    width: "352px",
    borderRadius: theme.shape.borderRadius,
    border: "none",
  },
  ".MuiInputBase-input": {
    padding: theme.spacing(1.5, 2, 1.5, 2),
  },
}));

export const StyledLoginInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: 12,
  lineHeight: "16px",
  margin: theme.spacing(0, 0, 2, 0),
  position: "static",
  transform: "none",
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "416px",
  height: "248px",
  borderRadius: "8px",
  backgroundColor: theme.palette.text.secondary,
  boxShadow: theme.customShadows.primary,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 4, 2, 4),
}));
