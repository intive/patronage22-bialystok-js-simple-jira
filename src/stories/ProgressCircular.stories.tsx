import CircularProgress from "@mui/material/CircularProgress";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "CircularProgress",
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  color: "success",
  disableShrink: true,
  size: 40,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
};
