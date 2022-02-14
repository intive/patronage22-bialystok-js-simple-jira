import { ThemeProvider } from "@mui/material";
import { ComponentStory } from "@storybook/react";
import BasicModal from "./BasicModal";
import { theme } from "../../theme/mainTheme";

import { Button } from "../Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import Input from "../Input/Input";

export default {
  title: "BasicModal",
  component: BasicModal,
};

const Template: ComponentStory<typeof BasicModal> = (args) => (
  <ThemeProvider theme={theme}>
    <BasicModal {...args}>{args.children}</BasicModal>
  </ThemeProvider>
);

export const CreateProject = Template.bind({});

export const CreateProjectWithError = Template.bind({});

export const LongModal = Template.bind({});

CreateProject.args = {
  buttons: [
    <Button variant='text' key='btn-1'>
      Cancel
    </Button>,
    <Button variant='contained' key='btn-2'>
      Create
    </Button>,
  ],
  children: <Input value='My first project' />,
  paddings: [10, 6, 7, 6],
  isOpen: true,
  headerIcon: <EditIcon />,
  title: "Name your project",
  alignTitle: "center",
};

CreateProjectWithError.args = {
  buttons: [
    <Button variant='text' key='btn-1'>
      Cancel
    </Button>,
    <Button disabled variant='contained' key='btn-2'>
      Create
    </Button>,
  ],
  children: (
    <Input
      value='       My first project'
      error={true}
      helperText={
        "Project title has to be at least one character long and cannot begin/end with a whitespace"
      }
    />
  ),
  paddings: [10, 6, 7, 6],
  isOpen: true,
  headerIcon: <EditIcon />,
  title: "Name your project",
  alignTitle: "center",
};

LongModal.args = {
  buttons: [
    <Button variant='contained' key='btn-1'>
      Submit
    </Button>,
  ],
  children: (
    <>
      <Input value='First input' />
      <Input value='Second input' />
      <Input value='Third input' />
      <Input value='Fourth input' />
      <Input value='Fifth input' />
      <Input value='Seventh input' />
      <Input value='Eighth input' />
    </>
  ),
  paddings: [10, 6, 7, 6],
  isOpen: true,
  title: "Form",
  alignTitle: "start",
};
