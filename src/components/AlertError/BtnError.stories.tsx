import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ButtonShowingAlertError from "./ButtonShowingAlertError";

export default {
  title: "BtnAlertError",
  component: ButtonShowingAlertError,
};

const Template: ComponentStory<typeof ButtonShowingAlertError> = (
  args: any
) => <ButtonShowingAlertError {...args} />;

export const ButtonShowingErrorAlertStory = Template.bind({});
