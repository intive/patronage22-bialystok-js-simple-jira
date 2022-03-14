import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@components/Button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: { options: ["text", "contained"] },
    disabled: { controls: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Basic = Template.bind({});

Basic.args = {
  children: "Continue",
  disabled: false,
};

Basic.parameters = {
  controls: {
    include: ["long", "variant", "children", "onClick", "disabled"],
    sort: "alpha",
  },
};
