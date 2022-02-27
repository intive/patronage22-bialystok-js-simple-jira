import {
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
  StyledInputLabel,
  StyledFormHelperText,
} from "./Select.style";
import { SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectProps {
  value?: string;
  options: string[];
  handleSelect: (e: SelectChangeEvent<unknown>) => void;
  secondary?: boolean;
  fullWidth?: boolean;
  blankValue?: boolean;
  inputProps?: {};
  helperText?: string;
  labelText?: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  handleSelect,
  secondary,
  value,
  fullWidth,
  blankValue,
  inputProps,
  helperText,
  labelText,
  disabled,
  ...props
}) => {
  const MenuProps = {
    MenuListProps: {
      style: {
        padding: 0,
      },
    },
  };

  return (
    <StyledFormControl
      secondary={secondary}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <StyledInputLabel>{labelText}</StyledInputLabel>
      <StyledSelect
        onChange={handleSelect}
        value={value}
        renderValue={(value: any) => value}
        IconComponent={KeyboardArrowDownIcon}
        secondary={secondary}
        blankValue={blankValue}
        MenuProps={MenuProps}
        inputProps={inputProps}
        {...props}
      >
        <StyledMenuItem value=''>Empty</StyledMenuItem>
        {options?.map((option) => (
          <StyledMenuItem
            value={option}
            key={option}
            secondary={secondary}
            fullWidth={fullWidth}
          >
            {option}
          </StyledMenuItem>
        ))}
      </StyledSelect>
      <StyledFormHelperText>{helperText}</StyledFormHelperText>
    </StyledFormControl>
  );
};
