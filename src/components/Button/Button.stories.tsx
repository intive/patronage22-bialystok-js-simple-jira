import { ThemeProvider } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { theme } from "../../theme/mainTheme";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    clickHandler: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>{args.children}</Button>
  </ThemeProvider>
);

export const Continue = Template.bind({});
export const NewProject = Template.bind({});
export const Cancel = Template.bind({});

Continue.args = {
  children: "Continue",
};

NewProject.args = {
  children: "New Project",
  long: true,
};

Cancel.args = {
  children: "Cancel",
  variant: "text",
};
