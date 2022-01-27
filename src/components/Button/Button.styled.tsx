import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material/";

export const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
}));
