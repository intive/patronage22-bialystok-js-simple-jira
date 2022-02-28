import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ButtonShowingAlertSuccess from "@components/Alert/ButtonShowingAlertSuccess";

export default {
  title: "BtnAlertSuccess",
  component: ButtonShowingAlertSuccess,
};

const Template: ComponentStory<typeof ButtonShowingAlertSuccess> = (
  args: any
) => <ButtonShowingAlertSuccess {...args} />;

export const ButtonShowingAlertSuccessStory = Template.bind({});
