import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Title = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(9, 0, 0, 5),
  fontSize: "24px",
  lineHeight: "40px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(9, 5, 0, 0),
  width: "134px",
  height: "40px",
  padding: "8px",
  backgroundColor: theme.palette.grey[700],
  borderRadius: 8,
  textTransform: "capitalize",
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  justifyContent: "space-between",
  height: "152px",
}));

export const StyledContainer = styled(Container)({
  maxWidth: "1440px",
});
