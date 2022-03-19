import {
  StyledPageWrapper,
  StyledWelcomeScreen,
  StyledParagraph,
  StyledIcon,
} from "./EmptyListModule.style";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@components/Button/Button";
import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";

interface EmptyListModule {
  secondary?: number;
  description: string;
  buttonText: string;
  dialogTitle: string;
  dialogHelper: string;
  addNew: (arg: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const EmptyListModule: React.FC<EmptyListModule> = ({
  secondary,
  description,
  buttonText,
  addNew,
  dialogTitle,
  dialogHelper,
  setIsOpen,
  isOpen,
}) => (
  <StyledPageWrapper secondary={secondary}>
    <StyledWelcomeScreen secondary={secondary}>
      <StyledIcon />
      <StyledParagraph>{description}</StyledParagraph>
      <Button onClick={() => setIsOpen(!isOpen)}>{buttonText}</Button>
      <NewItemDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dialogTitle={dialogTitle}
        dialogHelper={dialogHelper}
        handleAdd={addNew}
      />
    </StyledWelcomeScreen>
  </StyledPageWrapper>
);
