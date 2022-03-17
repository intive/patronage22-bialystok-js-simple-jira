import { useTranslation } from "react-i18next";
import {
  StyledPageWrapper,
  StyledWelcomeScreen,
  StyledParagraph,
  StyledIcon,
} from "./EmptyListModule.style";
import { useState } from "react";
import { Button } from "@components/Button/Button";
import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";

interface EmptyListModule {
  secondary?: boolean;
  description: string;
  buttonText: string;
  addNew: (arg: string) => void;
}

export const EmptyListModule: React.FC<EmptyListModule> = ({
  secondary,
  description,
  buttonText,
  addNew,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <StyledPageWrapper secondary={secondary}>
      <StyledWelcomeScreen secondary={secondary}>
        <StyledIcon />
        <StyledParagraph>{description}</StyledParagraph>
        <Button onClick={() => setIsDialogOpen(!isDialogOpen)}>
          {buttonText}
        </Button>
        <NewItemDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          dialogTitle={t("dialogCreateProjectTitle")}
          dialogHelper={t("dialogCreateProjectHelperText")}
          handleAdd={addNew}
        />
      </StyledWelcomeScreen>
    </StyledPageWrapper>
  );
};
