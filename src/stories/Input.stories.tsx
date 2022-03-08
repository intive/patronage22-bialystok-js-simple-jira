import { ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import Input from "@components/Input/Input";
import { theme } from "../theme/mainTheme";

export default {
  title: "Input_Component",
  component: Input,
  argTypes: {
    onChange: {
      action: "clicked",
    },
  },
};

const Template: ComponentStory<typeof Input> = (args: any) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
);

export const InputStory = Template.bind({});

export const InputStoryOutlined = Template.bind({});
export const InputStoryFilled = Template.bind({});

InputStoryOutlined.args = {
  labelHelperText: "Description",
  helperText: "This is wrong!",
  multiline: false,
  disabled: false,
  variant: "outlined",
  error: true,
};

InputStoryFilled.args = {
  labelHelperText: "Description",
  helperText: "This is wrong!",
  multiline: false,
  disabled: false,
  variant: "filled",
  error: true,
};

InputStory.parameters = {
  controls: {
    include: ["labelHelperText", "onChangeHandler", "variant"],
    sort: "alpha",
  },
};

InputStoryFilled.parameters = {
  controls: {
    include: [
      "labelHelperText",
      "onChangeHandler",
      // "variant",
      "multiline",
      "maxRows",
      "disabled",
      "error",
    ],
    sort: "alpha",
  },
};

InputStoryOutlined.parameters = {
  controls: {
    include: [
      "labelHelperText",
      "onChangeHandler",
      // "variant",
      "multiline",
      "maxRows",
      "error",
    ],
    sort: "alpha",
  },
};
