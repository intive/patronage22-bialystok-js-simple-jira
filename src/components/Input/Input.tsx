import { BaseTextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import { StyledTextField, StyledInputLabel } from "./Input.style";

export interface Input extends BaseTextFieldProps {
  helperText?: string;
  value: string;
  rows?: number;
  required?: boolean;
  labelText?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({
  value,
  rows = 0,
  required,
  labelText,
  onChangeHandler,
  ...extraProps
}: Input) => {
  return (
    <>
      <StyledInputLabel htmlFor='styled-text-input'>
        {labelText}
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
