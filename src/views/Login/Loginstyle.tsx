import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  "&.MuiBox-root": {
    position: "relative",
  },
}));

export const StyledBoxPassword = styled(Box)(({ theme }) => ({
  width: "352px",
  margin: theme.spacing(0, 4, 5, 4),
}));
