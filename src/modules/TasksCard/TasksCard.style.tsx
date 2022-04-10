import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const StyledTasksCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 250,
  width: 300,
  height: "67vh",
  borderRadius: theme.shape.borderRadius,
  padding: 16,
  boxShadow: theme.customShadows.primary,
  overflow: "auto",
  margin: 16,
}));

export const Title = styled((props) => <Typography {...props} />)(
  ({ theme }) => ({
    color: theme.palette.grey[300],
    textAlign: "initial",
  })
);
