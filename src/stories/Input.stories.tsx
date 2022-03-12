import { ComponentStory } from "@storybook/react";
import Input from "@components/Input/Input";

export default {
  title: "Input_Component",
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args: any) => (
  <Input {...args} />
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
