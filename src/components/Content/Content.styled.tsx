import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const LoaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 300,
}));

export const StyledLoader = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.grey[600],
}));
