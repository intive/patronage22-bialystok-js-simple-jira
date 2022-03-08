import { Box } from "@mui/material";
import PageHeader from "@modules/PageHeader/PageHeader";
import { useTranslation } from "react-i18next";
import { LoginView } from "../../components/Login/LoginView";
import { styled } from "@mui/material/styles";
import { Button } from "@components/Button/Button";

export const StyledBox = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
}));

export const Owl_components = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <PageHeader
        pageTitle={t("projectsTitle")}
        interactiveElement={
          <Button onClick={() => console.log("works")}>
            {t("newProjectBtn")}
          </Button>
        }
      />
      <StyledBox>
        <LoginView />
      </StyledBox>
    </Box>
  );
};
