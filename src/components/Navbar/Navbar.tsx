import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  NavbarWrapper,
  NavbarRightSideWrapper,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledSearchIconButton,
} from "./Navbar.style";
import Logo from "./Logo";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import Input from "../Input/Input";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { AuthContext, logOut } from "src/contexts/authentication";

const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[50],
  marginLeft: 0,
  padding: "0 20px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default function Navbar() {
  const [query, setQuery] = React.useState("");
  const handleChangeQuery = (event: any) => {
    setQuery(event.target.value);
  };
  const { t, i18n } = useTranslation();
  const { dispatch } = useContext(AuthContext);

  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <NavbarWrapper>
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
          <NavbarRightSideWrapper>
            <Search>
              <StyledSearchIconButton>
                <SearchIcon />
              </StyledSearchIconButton>
              <Input
                placeholder={t("search")}
                value={query}
                withoutBorder={true}
                onChangeHandler={handleChangeQuery}
              />
            </Search>
            <NavbarWrapper>
              <StyledIconButton>
                <DarkModeTwoToneIcon />
              </StyledIconButton>
              <StyledIconButton onClick={() => dispatch(logOut())}>
                <LogoutIcon />
              </StyledIconButton>
            </NavbarWrapper>
          </NavbarRightSideWrapper>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}
