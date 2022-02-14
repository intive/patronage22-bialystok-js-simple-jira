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
  border-color: transparent;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 264px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

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
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius + "px"};
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey[800]};

  & .MuiSelect-select {
    padding: 8px 44px 8px 24px !important;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[400]};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      height: 48px;
      background-color: ${({ theme }) => theme.palette.grey[50]};

      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[100]};
      }
    `}

  ${({ blankValue }) =>
    blankValue &&
    css`
      color: ${({ theme }) => theme.palette.grey[400]};
    `}
`;

export const StyledMenuItem = styled(MenuItem)<StyledSelectProps>`
  background-color: #fff;
  white-space: inherit;
  color: ${({ theme }) => theme.palette.grey[600]};

  ${({ secondary }) =>
    secondary &&
    css`
      width: 264px;
      height: 48px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
