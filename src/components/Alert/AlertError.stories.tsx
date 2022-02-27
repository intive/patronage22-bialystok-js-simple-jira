import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { AlertError } from "./Alert";

export default {
  title: "AlertError",
  component: AlertError,
};

const Template: ComponentStory<typeof AlertError> = (args: any) => (
  <AlertError {...args} />
);

export const AlertErrorStory = Template.bind({});

AlertErrorStory.args = {
  alertMsg: "This is an error message!",
  isOpen: true,
};
