import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledBoardListView = styled(Box)(({ theme }) => ({
  padding: "47px 64px",
  [theme.breakpoints.up(2000)]: {
    width: 2000,
    margin: "0 auto",
  },
}));
