import { styled } from "@mui/material/styles";

export const StyledPageWrapper = styled("div")`
  margin-top: 80px;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  height: calc(100vh - 80px);
  overflow: auto;
`;
