import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPageWrapper = styled(Box)(({ theme }) => ({
  marginTop: "80px",
  backgroundColor: theme.palette.grey[50],
  height: "calc(100vh - 80px)",
  overflow: "auto",
}));

export const IssueBodyContent = styled(Box)({
  padding: "48px 64px",
});

export const IssueTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "24px",
  color: theme.palette.grey[700],
  marginBottom: "40px",
}));

export const Label = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "16px",
  color: theme.palette.grey[500],
  marginBottom: "16px",
}));

export const TextNormal = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "24px",
  color: theme.palette.grey[800],
}));

export const TextOutlined = styled(TextNormal)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: "12px 16px",
  borderRadius: theme.shape.borderRadius,
}));

export const Section = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  padding: "32px 48px 40px 48px",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.customShadows.primary,

  "&& .MuiBox-root:not(:last-of-type)": {
    marginBottom: "32px",
  },
}));
