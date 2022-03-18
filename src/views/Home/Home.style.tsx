import { styled } from "@mui/material/styles";

export const StyledPageWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding-top: 108px;
  padding-bottom: 40px;
`;
