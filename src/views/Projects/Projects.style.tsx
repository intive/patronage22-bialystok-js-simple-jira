import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProjectList = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down(1060)]: {
    flexDirection: "column",
  },
  flexWrap: "wrap",
  justifyContent: "space-between",
  [theme.breakpoints.between(970, 10308)]: {
    justifyContent: "space-around",
  },
  padding: "0 32px",
}));
