import { styled } from "@mui/material/styles";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

export const StyledWelcomeScreen = styled("section")`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 72px 20px;
  width: 100%;
  height: 100%;
  max-width: 864px;
  max-height: 536px;
  background: ${({ theme }) => theme.palette.background.default};
  border: 1px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: ${({ theme }) => theme.shape.borderRadius + "px"};
`;

export const StyledParagraph = styled("p")`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-width: 415px;
  text-align: center;
  padding: 0 20px;
`;

export const StyledIcon = styled(AutoAwesomeOutlinedIcon)`
  width: 100%;
  height: 100%;
  max-width: 175px;
  max-height: 175px;
  padding: 0 20px;
  fill: ${({ theme }) => theme.palette.grey[400]};
`;
