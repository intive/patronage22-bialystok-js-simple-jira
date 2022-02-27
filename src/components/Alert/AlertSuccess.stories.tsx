import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { AlertSuccess } from "./Alert";

export default {
  title: "AlertSuccess",
  component: AlertSuccess,
};

const Template: ComponentStory<typeof AlertSuccess> = (args: any) => (
  <AlertSuccess {...args} />
);

export const AlertSuccessStory = Template.bind({});

AlertSuccessStory.args = {
  alertMsg: "This is a success message!",
  isOpen: true,
};
