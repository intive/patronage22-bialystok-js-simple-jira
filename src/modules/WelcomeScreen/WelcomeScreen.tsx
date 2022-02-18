import { useTranslation } from "react-i18next";
import {
  StyledWelcomeScreen,
  StyledParagraph,
  StyledIcon,
} from "./WelcomeScreen.style";
import { Button } from "../../components/Button/Button";

export const WelcomeScreen = () => {
  const { t } = useTranslation();

  return (
    <StyledWelcomeScreen>
      <StyledIcon />
      <StyledParagraph>{t("welcomeBoardParagraph")}</StyledParagraph>
      <Button>{t("welcomeBoardButton")}</Button>
    </StyledWelcomeScreen>
  );
};
