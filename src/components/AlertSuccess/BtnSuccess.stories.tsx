import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ButtonShowingSuccessAlert from "./ButtonShowingAlertSuccess";

export default {
  title: "BtnAlertSuccess",
  component: ButtonShowingSuccessAlert,
};

const Template: ComponentStory<typeof ButtonShowingSuccessAlert> = (
  args: any
) => <ButtonShowingSuccessAlert {...args} />;

export const ButtonShowingSuccessAlertStory = Template.bind({});
