import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import { DialogContent } from "@mui/material";

export const ConfirmationDialogContent = styled(DialogContent)({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  padding: "120px 48px 56px 48px",
});

export const ButtonBox = styled(Box)({
  alignSelf: "flex-end",
  marginTop: "32px",
  "& .MuiButtonBase-root:first-of-type": {
    marginRight: "5px",
  },
});
