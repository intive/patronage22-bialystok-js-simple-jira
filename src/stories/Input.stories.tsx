import { ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import Input from "../components/Input/Input";
import { theme } from "../theme/mainTheme";

export default {
  title: "Input_Component",
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args: any) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
);

export const InputStory = Template.bind({});

export const InputStoryTextOutlined = Template.bind({});
export const InputStoryFilled = Template.bind({});

InputStoryTextOutlined.args = {
  labelHelperText: "Description",
  helperText: "This is wrong!",
  multiline: false,
  disabled: false,
  variant: "outlined",
  error: false,
};

InputStoryFilled.args = {
  labelHelperText: "Description",
  helperText: "This is wrong!",
  multiline: false,
  disabled: false,
  variant: "filled",
  error: false,
};
