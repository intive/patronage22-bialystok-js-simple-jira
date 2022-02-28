import { useTranslation } from "react-i18next";
import {
  StyledWelcomeScreen,
  StyledParagraph,
  StyledIcon,
} from "./WelcomeScreen.style";
import { Button } from "../../components/Button/Button";
import NewProjectDialog from "../../components/NewProjectDialog/NewProjectDialog";
import { useState } from "react";

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
      <NewProjectDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </StyledWelcomeScreen>
  );
};
