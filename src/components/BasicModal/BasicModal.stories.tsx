import { ThemeProvider } from "@mui/material";
import { ComponentStory } from "@storybook/react";
import { theme } from "../../theme/mainTheme";
import EditIcon from "@mui/icons-material/Edit";

import BasicModal from "@components/BasicModal/BasicModal";
import { Button } from "@components/Button/Button";
import Input from "@components/Input/Input";

import {
  ButtonBox,
  IconBox,
  StyledDialogTitle,
  NewProjectDialogContent,
} from "@modules/NewProjectDialog/NewProjectDialog.style";

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
  children: (
    <NewProjectDialogContent>
      <IconBox>
        <EditIcon />
      </IconBox>
      <StyledDialogTitle>{"Name your project"}</StyledDialogTitle>
      <Input variant='filled' value='My first project' />
      <ButtonBox>
        <Button variant='text' key='btn-1'>
          Cancel
        </Button>
        <Button variant='contained' key='btn-2'>
          Create
        </Button>
      </ButtonBox>
    </NewProjectDialogContent>
  ),
  open: true,
};

CreateProject.parameters = {
  controls: {
    include: ["onClose", "open", "children"],
    sort: "alpha",
  },
};

CreateProjectWithError.args = {
  children: (
    <NewProjectDialogContent>
      <IconBox>
        <EditIcon />
      </IconBox>
      <StyledDialogTitle>{"Name your project"}</StyledDialogTitle>
      <Input
        variant='filled'
        value='       My first project'
        error={true}
        helperText={
          "Project title has to be at least one character long and cannot begin/end with a whitespace"
        }
      />
      <ButtonBox>
        <Button variant='text' key='btn-1'>
          Cancel
        </Button>
        <Button variant='contained' key='btn-2'>
          Create
        </Button>
      </ButtonBox>
    </NewProjectDialogContent>
  ),
  open: true,
};

CreateProjectWithError.parameters = {
  controls: {
    include: ["onClose", "open", "children"],
    sort: "alpha",
  },
};

LongModal.args = {
  children: (
    <NewProjectDialogContent>
      <Input value='First input' />
      <Input value='Second input' />
      <Input value='Third input' />
      <Input value='Fourth input' />
      <Input value='Fifth input' />
      <Input value='Seventh input' />
      <Input value='Eighth input' />
      <ButtonBox>
        <Button variant='text' key='btn-1'>
          Cancel
        </Button>
        <Button variant='contained' key='btn-2'>
          Create
        </Button>
      </ButtonBox>
    </NewProjectDialogContent>
  ),
  open: true,
};

LongModal.parameters = {
  controls: {
    include: ["onClose", "open", "children"],
    sort: "alpha",
  },
};
