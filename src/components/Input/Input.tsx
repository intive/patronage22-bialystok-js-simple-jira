import {
  BaseTextFieldProps,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import { ChangeEventHandler } from "react";
import { StyledTextField, StyledInputLabel } from "./Input.style";

interface Input extends BaseTextFieldProps {
  helperText?: string;
  value: string;
  rows?: number;
  required?: boolean;
  labelText?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({
  helperText,
  value,
  rows = 0,
  required,
  labelText,
  onChangeHandler,
  ...extraProps
}: Input) => {
  return (
    <>
      <StyledInputLabel shrink htmlFor='styled-text-input'>
        {helperText}
      </StyledInputLabel>
      <StyledTextField
        value={value}
        onChange={onChangeHandler}
        multiline={rows > 1}
        rows={rows}
        fullWidth
        id='styled-text-input'
        required={required}
        {...extraProps}
      />
    </>
  );
};

export default Input;
