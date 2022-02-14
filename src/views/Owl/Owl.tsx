import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useTranslation } from "react-i18next";
import { LoginComponent } from "../../components/Login/LoginComponent";
import { styled } from "@mui/material/styles";

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
        buttonText={t("newProjectBtn")}
      />
      <StyledBox>
        <LoginComponent
          LoginLabel={t("LoginHelperText")}
          PasswordLabel={t("PasswordHelperText")}
        />
      </StyledBox>
    </Box>
  );
};
