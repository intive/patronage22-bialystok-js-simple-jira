import { styled as styledmui } from "@mui/system";
import { AppBar, Box, Toolbar } from "@mui/material";

export const StyledAppBar = styledmui(AppBar)(({ theme }) => ({
  margin: "0 auto",
  position: "absolute",
  boxShadow: "none",
}));

export const StyledToolbar = styledmui(Toolbar)(({ theme }) => ({
  minHeight: "0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 64px",
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.grey[100],
}));

export const NavbarWrapper = styledmui(Box)(({ theme }) => ({
  margin: "0",
  padding: "0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
}));

export const NavbarRightSideWrapper = styledmui(Box)(({ theme }) => ({
  margin: "0",
  padding: "0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "90px",
}));
