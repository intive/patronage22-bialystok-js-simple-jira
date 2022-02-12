import { styled, css } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface StyledSelectProps {
  secondary?: boolean;
  fullWidth?: boolean;
  blankValue?: boolean;
}

export const StyledFormControl = styled(FormControl)<StyledSelectProps>`
  margin: 20px 5px;
  border-color: transparent;

  & .MuiSvgIcon-root {
    right: 0;
    fill: ${({ theme, secondary }) =>
      secondary ? theme.palette.grey[400] : theme.palette.grey[800]};
    padding-right: 20px;
    padding-left: 10px;
    border-color: transparent;
  }

  & .MuiSelect-iconOpen {
    padding-right: 10px;
    padding-left: 20px;
  }
`;

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

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[400]};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: #000;
      height: 48px;
      width: 264px;
      background-color: ${({ theme }) => theme.palette.grey[50]};
      padding: 12px 24px 12px 16px;

      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[100]};
      }

      & label {
        color: #000;
      }
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 50%;
    `}

  ${({ blankValue }) =>
    blankValue &&
    css`
      color: ${({ theme }) => theme.palette.grey[400]};
    `}
`;

export const StyledMenuItem = styled(MenuItem)<StyledSelectProps>`
  padding: 12px 16px;
  background-color: #fff;
  width: 218px;
  white-space: inherit;

  ${({ secondary }) =>
    secondary &&
    css`
      height: 48px;
      width: 264px;
      background-color: #fff;
      padding: 12px 24px 12px 16px;
    `}
`;
