import { styled, css } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface StyledSelectProps {
  secondary?: boolean;
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
  height: 40px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  margin: 0;
  padding: 8px 16px 8px 24px;
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  /* margin: 20px 2px; */

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[400]};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      height: 48px;
      width: 264px;
      background-color: ${({ theme }) => theme.palette.grey[50]};
      padding: 12px 24px 12px 16px;

      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[50]};
      }
    `}

  & .MuiPaper-root {
    box-shadow: ${({ theme }) => theme.shadows[2]};
  }
  &.MuiInputLabel-root {
    display: hidden;
  }
`;

export const StyledMenuItem = styled(MenuItem)<StyledSelectProps>`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 218px;
  white-space: inherit;

  ${({ secondary }) =>
    secondary &&
    css`
      height: 48px;
      width: 264px;
      background-color: ${({ theme }) => theme.palette.primary.main};
      padding: 12px 24px 12px 16px;
    `}
`;
