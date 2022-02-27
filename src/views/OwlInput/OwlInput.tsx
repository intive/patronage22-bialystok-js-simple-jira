import { Box } from "@mui/material";
import Input from "../../components/Input/Input";
import { useTranslation } from "react-i18next";

export const Owl_componentsInput = () => {
  const { t } = useTranslation();
  return (

   <Box sx={{ marginTop: "200px" }}>
      <Input
        labelHelperText={t("labelSummary")}
        variant='filled'
        helperText='Incorrect input!'
      />

    </Box>
  );
};
