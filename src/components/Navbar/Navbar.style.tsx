import { styled as styledmui } from "@mui/system";
import { AppBar, Box, Toolbar } from "@mui/material";

export const StyledAppBar = styledmui(AppBar)(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "1440px",
}));

export const StyledToolbar = styledmui(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 64px",
}));

export const NavbarWrapper = styledmui(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
