import { ThemeProvider } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { theme } from "../../theme/mainTheme";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    clickHandler: { action: "clicked" },
    variant: { options: ["text", "contained"] },
    disabled: { controls: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>{args.children}</Button>
  </ThemeProvider>
);

export const Basic = Template.bind({});

Basic.args = {
  children: "Continue",
  disabled: false,
};

Basic.parameters = {
  controls: {
    include: ["long", "variant", "children", "clickHandler", "disabled"],
    sort: "alpha",
  },
};
