import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { NavbarWrapper, StyledAppBar, StyledToolbar } from "./Navbar.style";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import DarkModeIcon from "./DarkModeIcon";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[50],
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey[400],
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position='static'>
        <StyledToolbar sx={{ backgroundColor: "grey.800", color: "grey.100" }}>
          <NavbarWrapper sx={{ gap: "1vw" }}>
            <Logo />
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Task management tool
            </Typography>
          </NavbarWrapper>
          <NavbarWrapper sx={{ gap: "5vw" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <DarkModeIcon />
          </NavbarWrapper>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}
