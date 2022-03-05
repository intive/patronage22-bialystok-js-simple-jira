import { styled } from "@mui/material/styles";
import { FormGroup } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import Box from "@mui/material/Box";

import Input from "@components/Input/Input";

export const CreateIssueDialogContent = styled(DialogContent)({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  padding: "40px 40px 24px 40px",
});

export const StyledDialogTitle = styled(DialogTitle)({
  textAlign: "start",
  lineHeight: "24px",
  fontSize: "24px",
  padding: 0,
  marginBottom: "32px",
});

export const StyledFormGroup = styled(FormGroup)({
  "& .MuiFormControl-root:not(.MuiFormControl-root:last-of-type)": {
    marginBottom: "16px",
  },
  "& .MuiFormControl-root": {
    width: "50%",
  },
  "&& .MuiFormControl-root:nth-of-type(5)": {
    margin: "0px",
  },
});

export const LongInput = styled(Input)({
  width: "100% !important",
});

export const ButtonBox = styled(Box)({
  alignSelf: "flex-end",
  marginTop: "32px",
  "& .MuiButtonBase-root:first-of-type": {
    marginRight: "5px",
  },
});
