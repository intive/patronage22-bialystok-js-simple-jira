import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";

type DialogProps = {
  paddings: Array<number>;
};

type DialogTitleProps = {
  alignTitle: "center" | "end" | "start";
  titleMargin: string;
};

type ButtonBoxProps = {
  buttonsTopMargin: string;
};

export const IconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-60px",
  left: "50%",
  transform: "translateX(-50%)",
  boxSizing: "border-box",
  minWidth: "112px",
  minHeight: "112px",
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

export const StyledDialog = styled(Dialog)<DialogProps>(
  ({ paddings, theme }) => ({
    overflowY: "auto",

    "& .MuiDialog-container": {
      height: "auto",
      minHeight: "100vh",
    },

    "& .MuiPaper-root": {
      boxSizing: "border-box",
      marginBottom: "68px",
      marginTop: "68px",
      minWidth: "544px",
      minHeight: "304px",
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
      padding: 0,
      minWidth: "100%",
      width: 0,
    },
  })
);

export const ButtonBox = styled(({ buttonsTopMargin, ...props }) => (
  <Box {...props} />
))<ButtonBoxProps>(({ buttonsTopMargin }) => ({
  alignSelf: "flex-end",
  marginTop: buttonsTopMargin,
  boxShadow: "none",
  border: "none",

  "& .MuiButtonBase-root:first-of-type": {
    marginRight: "5px",
  },
}));

export const StyledDialogTitle = styled(
  ({ alignTitle, titleMargin, ...props }) => <DialogTitle {...props} />
)<DialogTitleProps>(({ theme, alignTitle, titleMargin }) => ({
  width: "100%",
  textAlign: alignTitle,
  lineHeight: "32px",
  fontSize: "24px",
  padding: 0,
  marginBottom: titleMargin,
}));
