import LinearProgress from "@mui/material/LinearProgress";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "LinearProgress",
  component: LinearProgress,
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (args) => (
  <LinearProgress {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  color: "secondary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
};
