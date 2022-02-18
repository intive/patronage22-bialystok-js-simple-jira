import { BaseTextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import { StyledTextField, StyledInputLabel } from "./Input.style";

export interface Input extends BaseTextFieldProps {
  labelHelperText?: string;
  value?: string;
  rows?: number;
  required?: boolean;
  error?: boolean;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({
  labelHelperText,
  value,
  rows = 0,
  required,
  error,
  onChangeHandler,
  ...extraProps
}: Input) => {
  return (
    <>
      <StyledInputLabel htmlFor='styled-text-input'>
        {labelHelperText}
      </StyledInputLabel>
      <StyledTextField
        value={value}
        onChange={onChangeHandler}
        multiline={rows > 1}
        rows={rows}
        fullWidth
        id='styled-text-input'
        required={required}
        error
        helperText='Incorrect entry'
        {...extraProps}
      />
    </>
  );
};

export default Input;
