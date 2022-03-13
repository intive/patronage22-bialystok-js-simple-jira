import { ComponentStory } from "@storybook/react";
import Input from "@components/Input/Input";

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
  <Input {...args} />
);

export const InputStory = Template.bind({});

export const InputStoryOutlined = Template.bind({});
export const InputStoryFilled = Template.bind({});
export const InputStoryMulti = Template.bind({});

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

InputStoryMulti.args = {
  labelHelperText: "Description",
  helperText: "This is wrong!",
  multiline: true,
  disabled: false,
  variant: "filled",
  error: true,
  maxRows: 3,
};

InputStory.parameters = {
  controls: {
    include: ["labelHelperText", "onChangeHandler", "variant"],
    sort: "alpha",
  },
};

InputStoryFilled.parameters = {
  controls: {
    include: ["labelHelperText", "onChangeHandler", "disabled", "error"],
    sort: "alpha",
  },
};

InputStoryOutlined.parameters = {
  controls: {
    include: ["labelHelperText", "onChangeHandler", "error"],
    sort: "alpha",
  },
};

InputStoryMulti.parameters = {
  controls: {
    include: [
      "labelHelperText",
      "onChangeHandler",
      "variant",
      "multiline",
      "error",
      "maxRows",
    ],
    sort: "alpha",
  },
};
