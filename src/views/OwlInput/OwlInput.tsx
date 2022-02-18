import { Box } from "@mui/material";
import Input from "../../components/Input/Input";
import { useTranslation } from "react-i18next";

export const Owl_componentsInput = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Input helperText={t("labelSummary")} value='' multiline={true} />
    </Box>
  );
};
