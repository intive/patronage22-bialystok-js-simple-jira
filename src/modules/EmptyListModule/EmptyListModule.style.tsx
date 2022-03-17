import { styled, css } from "@mui/material/styles";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

interface EmptyListModuleProps {
  secondary?: boolean;
}

export const StyledPageWrapper = styled("section")<EmptyListModuleProps>`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};

  ${({ secondary }) =>
    secondary &&
    css`
      align-items: flex-start;
    `}
`;

export const StyledWelcomeScreen = styled("article")<EmptyListModuleProps>`
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

  ${({ secondary }) =>
    secondary &&
    css`
      margin: 20px;
    `}
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
