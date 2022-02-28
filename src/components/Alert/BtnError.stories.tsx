import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ButtonShowingAlertError from "@components/Alert/ButtonShowingAlertError";

export default {
  title: "BtnAlertError",
  component: ButtonShowingAlertError,
};

const Template: ComponentStory<typeof ButtonShowingAlertError> = (
  args: any
) => <ButtonShowingAlertError {...args} />;

export const ButtonShowingAlertErrorStory = Template.bind({});
