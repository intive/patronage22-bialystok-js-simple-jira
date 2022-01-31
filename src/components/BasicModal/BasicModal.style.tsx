import { styled } from "@mui/system";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

export const IconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxSizing: "border-box",
  width: "112px",
  height: "112px",
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  background: theme.palette.grey["100"],
  "& .MuiSvgIcon-root": {
    width: "64px",
    height: "64px",
    color: theme.palette.grey["500"],
  },
}));

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    boxSizing: "content-box",
    marginBottom: "16px",
    minWidth: "544px",
    minHeight: "304px",
    maxHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    padding: "48px 48px 56px 48px",
    borderRadius: theme.shape.borderRadius,
  },

  "& .MuiButtonBase-root:first-of-type": {
    marginRight: "6px",
  },

  "& .MuiButtonGroup-root": {
    alignSelf: "flex-end",
    marginTop: "auto",
  },
}));
