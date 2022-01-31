import { BaseTextFieldProps, styled, TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  minHeight: "48px",
  padding: "12px, 24px, 12px, 16px",
  backgroundColor: theme.palette.grey[50],
  borderRadius: "8px",
  border: "none",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
interface Input extends BaseTextFieldProps {
  value: string;
  rows?: string;
  required?: boolean;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({
  value,
  rows,
  required,
  onChangeHandler,
  ...extraProps
}: Input) => {
  return (
    <StyledTextField
      value={value}
      onChange={onChangeHandler}
      multiline={Boolean(rows)}
      rows={rows}
      fullWidth
      required={required}
      {...extraProps}
    />
  );
};

export default Input;
