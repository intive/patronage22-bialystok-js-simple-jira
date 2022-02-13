import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 416,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.customShadows.primary,
  marginTop: 24,
}));

export const CardContent = styled("div")({
  padding: 16,
  maxWidth: "calc(100% - 84px)",
});

export const Background = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  minHeight: 224,
}));

export const ProjectName = styled((props) => <Typography {...props} />)(
  ({ theme }) => ({
    color: theme.palette.grey[700],
    lineHeight: "24px",
    fontSize: 16,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  })
);

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  lineHeight: 0,
});
