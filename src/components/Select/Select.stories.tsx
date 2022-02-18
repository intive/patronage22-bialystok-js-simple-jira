import { SelectChangeEvent, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "../../theme/mainTheme";
import { Select } from "./Select";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Select (drop-down list)",
  component: Select,
  args: {
    secondary: true,
    fullWidth: false,
  },
};

export const SelectStoryNoValue = ({ ...args }) => {
  const [{ secondary, fullWidth }] = useArgs();
  const [selectValue, setSelectValue] = useState("");
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    e.preventDefault();
    const value = e.target.value as string;
    setSelectValue(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Select
        {...args}
        value={selectValue || "Select option"}
        options={["Option 1", "Option 2", "Option 3"]}
        handleSelect={handleChange}
        secondary={secondary}
        blankValue={selectValue ? false : true}
        fullWidth={fullWidth}
      />
    </ThemeProvider>
  );
};

export const SelectStory = ({ ...args }) => {
  const [selectValue, setSelectValue] = useState("Option 1");
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    e.preventDefault();
    const value = e.target.value as string;
    setSelectValue(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Select
        {...args}
        value={selectValue}
        options={["Option 1", "Option 2", "Option 3"]}
        handleSelect={handleChange}
        blankValue={selectValue ? false : true}
      />
    </ThemeProvider>
  );
};
