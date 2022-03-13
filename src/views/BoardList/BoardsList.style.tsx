import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBoardList = styled(Box)(({ theme }) => ({
  padding: "47px 64px",
  [theme.breakpoints.up(2000)]: {
    width: 2000,
    margin: "0 auto",
  },
}));

export const StyledPageWrapper = styled("div")`
  margin-top: 80px;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  height: calc(100vh - 80px);
  overflow: auto;
`;
