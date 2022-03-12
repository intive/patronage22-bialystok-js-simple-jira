import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProjectList = styled(Box)(({ theme }) => ({
  padding: "47px 64px",
  [theme.breakpoints.up(2000)]: {
    width: 2000,
    margin: "0 auto",
  },
}));

export const StyledPageWrapper = styled("div")`
  margin-top: 80px;
  height: calc(100vh - 80px);
  overflow: auto;
`;
