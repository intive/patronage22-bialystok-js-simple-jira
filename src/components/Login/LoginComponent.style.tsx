import { Box, InputLabel, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLoginTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.grey[800],
    height: "48px",
    width: "352px",
    borderRadius: theme.shape.borderRadius,
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

export const StyledBoxForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "416px",
  height: "248px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.text.secondary,
  boxShadow: theme.customShadows.primary,
}));

export const StyledBoxLogin = styled(Box)(({ theme }) => ({
  width: "352px",
  margin: theme.spacing(4, 4, 2, 4),
}));

export const StyledBoxPassword = styled(Box)(({ theme }) => ({
  width: "352px",
  margin: theme.spacing(0, 4, 5, 4),
}));
