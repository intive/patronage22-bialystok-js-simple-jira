import { styled as styledmui } from "@mui/material/styles";
import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

export const StyledAppBar = styledmui(AppBar)(({ theme }) => ({
  width: "100%",
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

export const StyledIconButton = styledmui(IconButton)(({ theme }) => ({
  padding: "0",
  color: theme.palette.grey[100],
}));

export const StyledSearchIconButton = styledmui(IconButton)(({ theme }) => ({
  padding: "0",
  color: theme.palette.grey[300],
}));

export const StyledTitleTypography = styledmui(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
}));

export const StyledLogoIconButton = styledmui(IconButton)(({ theme }) => ({
  padding: "0",
  color: theme.palette.grey[50],
}));

export const StyledSearchField = styledmui(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[50],
  border: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
}));
