
import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  NavbarWrapper,
  NavbarRightSideWrapper,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledSearchIconButton,
  StyledTitleTypography,
  StyledLogoIconButton,
  StyledSearchField,
} from "./Navbar.style";
import Logo from "./Logo";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

import IconButton from "@mui/material/IconButton";
import { AuthContext, logOut } from "src/contexts/authentication";
        import { useTranslation } from "react-i18next";
import { InputAdornment } from "@mui/material";

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
            <StyledLogoIconButton>
              <Logo />
            </StyledLogoIconButton>
            <StyledTitleTypography variant='h6' noWrap>
              {t("taskManagementTool")}
            </StyledTitleTypography>
          </NavbarWrapper>
          <NavbarRightSideWrapper>
            <StyledSearchField
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <StyledSearchIconButton>
                      <SearchIcon />
                    </StyledSearchIconButton>
                  </InputAdornment>
                ),
              }}
              inputProps={{
                "aria-label": "query",
              }}
              placeholder={t("search")}
              value={query}
              onChange={handleChangeQuery}
            />
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
