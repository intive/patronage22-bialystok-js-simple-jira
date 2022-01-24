import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const StyledSelect = styled(Select)`
  max-height: 40px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  margin: 0;
  padding: 8px 16px 8px 24px;
  border-radius: 8px;
`;

export const StyledMenuItem = styled(MenuItem)`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 218px;
  white-space: inherit;
`;
