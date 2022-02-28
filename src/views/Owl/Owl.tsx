import { Box } from "@mui/material";
import PageHeader from "@modules/PageHeader/PageHeader";
import { useTranslation } from "react-i18next";

export const Owl_components = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <PageHeader
        pageTitle={t("projectsTitle")}
        buttonText={t("newProjectBtn")}
      />
    </Box>
  );
};
