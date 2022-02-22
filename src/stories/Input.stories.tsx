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
export const InputStoryText = Template.bind({});

InputStoryText.args = {
  labelHelperText: "Description",
  helperText: "This is wrong!",
  multiline: false,
  disabled: false,
};
