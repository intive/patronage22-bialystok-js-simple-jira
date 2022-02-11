import { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { StyledButton, StyledGrid, Title } from "./PageHeader.style";

interface SectionProps {
  pageTitle: string;
  buttonText: string;
  buttonHandler?: MouseEventHandler;
}

export default function PageHeader({
  pageTitle,
  buttonText,
  buttonHandler = () => {},
}: SectionProps) {
  const { t } = useTranslation();

  const title =
    pageTitle === "Projects" ? t("projectsTitle") : t("boardsTitle");

  const buttonName =
    buttonText === "New project" ? t("newProjectBtn") : t("newBoardBtn");

  return (
    <Box>
      <StyledGrid container>
        <Grid item>
          <Title>{title}</Title>
        </Grid>
        <Grid item>
          <StyledButton onClick={buttonHandler}>{buttonName}</StyledButton>
        </Grid>
      </StyledGrid>
    </Box>
  );
}
