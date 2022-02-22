import { BaseTextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import { StyledTextField, StyledInputLabel } from "./Input.style";

export interface Input extends BaseTextFieldProps {
  labelHelperText?: string;
  value?: string;
  rows?: number;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({
  labelHelperText,
  // value,
  onChangeHandler,
  ...extraProps
}: Input) => {
  return (
    <>
      <StyledInputLabel htmlFor='styled-text-input'>
        {labelHelperText}
      </StyledInputLabel>
      <StyledTextField
        // value={value}
        onChange={onChangeHandler}
        // disabled
        id='styled-text-input'
        {...extraProps}
      />
    </>
  );
};

export default Input;
