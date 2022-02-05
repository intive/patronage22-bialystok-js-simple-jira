import { LinearProgressProps } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinearIndeterminate from "../components/ProgressBar/ProgressBar";

export default {
  title: "LinearIndeterminate",
  component: LinearIndeterminate,
  argTypes: {
    variant: { control: "string" },
  },
};

const Template: ComponentStory<typeof LinearIndeterminate> = (args: any) => (
  <LinearIndeterminate {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
};
