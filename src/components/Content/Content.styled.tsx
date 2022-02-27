import { keyframes } from "styled-components";
import { styled } from "@mui/material/styles";

import { ReactComponent as Loader } from "./loading.svg";
import { Box } from "@mui/material";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 300,
  color: theme.palette.grey[600],
}));

export const StyledLoader = styled(Loader)`
  animation: ${rotate} 2s linear infinite;
`;
