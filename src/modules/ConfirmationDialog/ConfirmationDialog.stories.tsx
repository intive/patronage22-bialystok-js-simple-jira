import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../translations/i18n";
import { ConfirmationDialog } from "@modules/ConfirmationDialog/ConfirmationDialog";

export default {
  title: "ConfirmationDialog",
  component: ConfirmationDialog,
  argTypes: {
    isOpen: { action: "clicked" },
    handleClose: { action: "clicked" },
  },
} as ComponentMeta<typeof ConfirmationDialog>;

const Template: ComponentStory<typeof ConfirmationDialog> = (args) => (
  <ConfirmationDialog {...args}>{args.children}</ConfirmationDialog>
);

export const Basic = Template.bind({});

Basic.args = {
  children: "Are you sure?",
  confirmHandler: () => console.log("Confirmation Dialog works!"),
  isOpen: true,
  handleClose: () => console.log("Close Dialog"),
};
