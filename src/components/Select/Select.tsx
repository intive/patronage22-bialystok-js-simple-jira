import {
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
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
}

export const Select: React.FC<SelectProps> = ({
  options,
  handleSelect,
  secondary,
  value,
  fullWidth,
  blankValue,
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
    <StyledFormControl secondary={secondary} fullWidth={fullWidth}>
      <StyledSelect
        onChange={handleSelect}
        value={value}
        renderValue={(value: any) => value}
        IconComponent={KeyboardArrowDownIcon}
        secondary={secondary}
        blankValue={blankValue}
        MenuProps={MenuProps}
        {...props}
      >
        {options.map(
          (option) =>
            option !== value && (
              <StyledMenuItem
                value={option}
                key={option}
                secondary={secondary}
                fullWidth={fullWidth}
              >
                {option}
              </StyledMenuItem>
            )
        )}
      </StyledSelect>
    </StyledFormControl>
  );
};
