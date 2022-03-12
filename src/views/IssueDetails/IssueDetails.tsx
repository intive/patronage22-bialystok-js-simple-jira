import { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import PageHeader from "@modules/PageHeader/PageHeader";
import { Select } from "@components/Select/Select";
import {
  StyledPageWrapper,
  IssueBodyContent,
  Section,
  IssueTitle,
  Label,
  TextNormal,
  TextOutlined,
} from "./IssueDetails.style";

export const IssueDetails = () => {
  const { t } = useTranslation();
  const issueStatus = [t("ToDo"), t("InProgress"), t("Done")];
  const [status, setStatus] = useState<string>(t("ToDo"));

  const handleSelect = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <StyledPageWrapper>
      <PageHeader
        returnLink='Return to Awesome project'
        pageTitle='The Best Issue'
        interactiveElement={
          <Select
            options={issueStatus}
            value={status}
            handleSelect={handleSelect}
          />
        }
      />
      <IssueBodyContent>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Section>
              <IssueTitle>{t("dialogCreateProjectTitle")}</IssueTitle>
              <Box>
                <Label>{t("labelDescription")}</Label>
                <TextNormal>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  iusto nostrum voluptatibus fugiat ducimus delectus officia
                  aspernatur adipisci quibusdam consectetur, facere aut!
                  Aspernatur quaerat dolorem repellat tempora possimus quas
                  soluta!
                </TextNormal>
              </Box>
              <Box>
                <Label>{t("labelLinkedIssues")}</Label>
                <TextOutlined>Apples & Oranges</TextOutlined>
              </Box>
            </Section>
          </Grid>
          <Grid item xs={4}>
            <Section>
              <Box>
                <Label>{t("labelAssignee")}</Label>
                <TextOutlined>Han Solo</TextOutlined>
              </Box>
              <Box>
                <Label>{t("labelReporter")}</Label>
                <TextOutlined>Joe Doe</TextOutlined>
              </Box>
            </Section>
          </Grid>
        </Grid>
      </IssueBodyContent>
    </StyledPageWrapper>
  );
};
