import { styled, css } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface StyledSelectProps {
  secondary?: boolean;
  fullWidth?: boolean;
}

export const StyledFormControl = styled(FormControl)<StyledSelectProps>`
  margin: 20px 5px;

  & .MuiSvgIcon-root {
    fill: ${({ theme, secondary }) =>
      secondary ? theme.palette.grey[400] : theme.palette.grey[800]};
    right: 0;
    padding-right: 20px;
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
        background-color: ${({ theme }) => theme.palette.grey[50]};
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
`;

export const StyledMenuItem = styled((props) => (
  <MenuItem {...props} />
))<StyledSelectProps>`
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

  }
`;
