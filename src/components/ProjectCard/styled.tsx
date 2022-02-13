import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const StyledCard = styled(Card)({
  borderRadius: 8,
  boxShadow: "0px 1px 3px rgba(98, 98, 98, 0.24)",
});

export const CardContent = styled("div")({
  padding: 16,
});

export const Background = styled(Box)({
  backgroundColor: "#E1E1E1",
  minHeight: "224px",
});

export const ProjectName = styled((props) => <Typography {...props} />)`
  color: #515151;
  line-height: 24px;
  font-size: 16px;
`;

export const StyledCardActions = styled(CardActions)({
  padding: 20,
});

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  lineHeight: 0,
});
