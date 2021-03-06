import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ButtonShowingAlertError from "@modules/ButtonsShowingAlerts/ButtonShowingAlertError";

export default {
  title: "BtnAlertError",
  component: ButtonShowingAlertError,
};

const Template: ComponentStory<typeof ButtonShowingAlertError> = (
  args: any
) => <ButtonShowingAlertError {...args} />;

export const ButtonShowingAlertErrorStory = Template.bind({});
