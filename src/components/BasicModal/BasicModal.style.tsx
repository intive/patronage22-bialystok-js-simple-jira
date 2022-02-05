import { styled } from "@mui/system";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

type DialogProps = {
  paddings: Array<number>;
};

export const IconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-56px",
  left: "50%",
  transform: "translateX(-50%)",
  boxSizing: "border-box",
  minWidth: "112px",
  minHeight: "112px",
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  background: theme.palette.grey["100"],
  marginBottom: "32px",

  "& .MuiSvgIcon-root": {
    width: "64px",
    height: "64px",
    color: theme.palette.grey["500"],
  },
}));

export const StyledDialog = styled(Dialog)<DialogProps>(
  ({ paddings, theme }) => ({
    "& .MuiPaper-root": {
      boxSizing: "content-box",
      marginBottom: "16px",
      minWidth: "544px",
      minHeight: "304px",
      maxHeight: "60vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: theme.spacing(paddings[0]),
      paddingRight: theme.spacing(paddings[1]),
      paddingBottom: theme.spacing(paddings[2]),
      paddingLeft: theme.spacing(paddings[3]),
      borderRadius: "8px",
      overflow: "visible",
      boxShadow: "0px 8px 16px rgba(98, 98, 98, 0.24)",
    },

    "& .MuiDialogContent-root": {
      boxSizing: "border-box",
      width: "100%",
      padding: 0,
    },
  })
);

export const ButtonBox = styled(Box)(({ theme }) => ({
  alignSelf: "flex-end",
  marginTop: "auto",
  boxShadow: "none",
  border: "none",

  "& .MuiButtonBase-root:first-of-type": {
    marginRight: "6px",
  },
}));
