import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const StyledTicket = styled(Card)(({ theme }) => ({
  padding: "16px 16px 12px 16px",
  margin: "12px 0px",
  boxShadow: "0px 2px 6px rgba(98, 98, 98, 0.21)",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
}));

export const CardContentNoPadding = styled(CardContent)(({ theme }) => ({
  padding: "0",
  "&:last-child": {
    paddingBottom: "0px",
  },
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  lineHeight: 0,
}));

export const StyledTicketHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  padding: "0",
}));

export const StyledTicketContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
}));

export const StyledTicketContentText = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "24px",
  display: "inline-block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const AssignedTo = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "12px",
  lineHeight: "16px",
  display: "inline-block",
}));

export const Assignee = styled(AssignedTo)(({ theme }) => ({
  color: theme.palette.grey[500],
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
