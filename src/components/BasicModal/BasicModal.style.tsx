import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const StyledDialog = styled(Dialog)({
  overflowY: "auto",

  "& .MuiDialog-container": {
    height: "auto",
    minHeight: "100vh",
  },

  "& .MuiPaper-root": {
    minWidth: "544px",
    overflow: "visible",
    boxShadow: "0px 8px 16px rgba(98, 98, 98, 0.24)",
  },

  "& .MuiDialogContent-root": {
    minWidth: "100%",
    width: 0,
  },
});
