import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  }
`;
