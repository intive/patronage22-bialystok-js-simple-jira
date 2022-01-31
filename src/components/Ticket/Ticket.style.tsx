import { styled as styledmui } from "@mui/system";
import { Card, CardContent } from "@mui/material";

export const StyledTicket = styledmui(Card)(({ theme }) => ({
  maxWidth: "384px;",
  height: "8vh",
  borderRadius: theme.shape.borderRadius,
  padding: "1vh",
  margin: "2vh",
  fontFamily: "Roboto",
}));

export const StyledTicketContent = styledmui(CardContent)(() => ({
  maxWidth: "352px",
}));
