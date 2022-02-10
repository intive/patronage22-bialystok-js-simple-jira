import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Title = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(8.75, 0, 0, 8),
  fontSize: "28px",
  lineHeight: "40px",
  color: theme.palette.grey[700],
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(8.75, 8, 0, 0),
  width: "134px",
  height: "40px",
  padding: theme.spacing(1, 3, 1, 3),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.grey[700],
  borderRadius: 8,
  textTransform: "none",
  fontWeight: "400",
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  justifyContent: "space-between",
  height: "152px",
}));
