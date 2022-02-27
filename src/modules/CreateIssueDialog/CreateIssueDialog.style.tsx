import { styled } from "@mui/material/styles";
import { FormGroup } from "@mui/material";
import Input from "../../components/Input/Input";

export const StyledFormGroup = styled(FormGroup)(() => ({
  "& .MuiFormControl-root:not(.MuiFormControl-root:last-of-type)": {
    marginBottom: "16px",
  },
  "& .MuiFormControl-root": {
    width: "50%",
  },
  "&& .MuiFormControl-root:nth-of-type(5)": {
    margin: "0px",
  },
}));

export const LongInput = styled(Input)(() => ({
  width: "100% !important",
}));
