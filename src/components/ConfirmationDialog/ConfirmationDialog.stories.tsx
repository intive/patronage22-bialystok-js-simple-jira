import { ThemeProvider } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { theme } from "../../theme/mainTheme";
import { ConfirmationDialog } from "./ConfirmationDialog";
import "../../translations/i18n";
import { useState } from "react";

export default {
  title: "ConfirmationDialog",
  component: ConfirmationDialog,
  argTypes: {
    isOpen: { action: "clicked" },
    handleClose: { action: "clicked" },
  },
} as ComponentMeta<typeof ConfirmationDialog>;

const Template: ComponentStory<typeof ConfirmationDialog> = (args) => (
  <ThemeProvider theme={theme}>
    <ConfirmationDialog {...args}>{args.children}</ConfirmationDialog>
  </ThemeProvider>
);

export const Basic = Template.bind({});

Basic.args = {
  children: "Are you sure?",
  confirmHandler: () => console.log("Confirmation Dialog works!"),
  isOpen: true,
  handleClose: () => console.log("Close Dialog"),
};
