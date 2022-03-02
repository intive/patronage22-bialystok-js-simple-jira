import { useTranslation } from "react-i18next";
import {
  StyledWelcomeScreen,
  StyledParagraph,
  StyledIcon,
} from "./WelcomeScreen.style";
import { useState } from "react";
import { Button } from "@components/Button/Button";
import NewProjectDialog from "@modules/NewProjectDialog/NewProjectDialog";

export const WelcomeScreen = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <StyledWelcomeScreen>
      <StyledIcon />
      <StyledParagraph>{t("welcomeBoardParagraph")}</StyledParagraph>
      <Button onClick={() => setIsDialogOpen(!isDialogOpen)}>
        {t("welcomeBoardButton")}
      </Button>
      <NewProjectDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        dialogTitle={t("dialogCreateProjectTitle")}
        dialogHelper={t("dialogCreateProjectHelperText")}
      />
    </StyledWelcomeScreen>
  );
};
