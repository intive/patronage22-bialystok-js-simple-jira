import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../components/Input/Input";

export default {
  title: "Input_Component",
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args: any) => (
  <Input {...args} />
);

export const InputStory = Template.bind({});
export const InputStoryText = Template.bind({});

InputStoryText.args = {
  labelHelperText: "Description",
};
