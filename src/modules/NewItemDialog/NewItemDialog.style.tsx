import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import { DialogTitle, DialogContent } from "@mui/material";

export const NewItemDialogContent = styled(DialogContent)({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  padding: "80px 48px 56px 48px",
});

export const IconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-60px",
  left: "50%",
  transform: "translateX(-50%)",
  minWidth: "112px",
  minHeight: "112px",
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  background: theme.palette.grey[100],

  "& .MuiSvgIcon-root": {
    width: "64px",
    height: "64px",
    color: theme.palette.grey[500],
  },
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: "center",
  lineHeight: "32px",
  fontSize: "24px",
  padding: 0,
  marginBottom: "16px",
}));

export const ButtonBox = styled(Box)(() => ({
  alignSelf: "flex-end",
  marginTop: "32px",
  "& .MuiButtonBase-root:first-of-type": {
    marginRight: "5px",
  },
}));
