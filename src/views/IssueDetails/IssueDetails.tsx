import { useCallback, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { API_ISSUE } from "../../api/contsans";

let FetchDataAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/issue/mockIssueDetails");
    FetchDataAPI = module.default;
    console.log(FetchDataAPI);
  } else {
    const module = await import("../../api/requestsApi");
    FetchDataAPI = module.default;
  }
}

export const IssueDetails = () => {
  const { t } = useTranslation();

  const issueStatus = [t("ToDo"), t("InProgress"), t("Done")];
  const [status, setStatus] = useState<string>(t("ToDo"));

  const { issueId, projectName } = useParams();
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [assigneeName, setAssigneeName] = useState("");
  const reporterName = "Joe Doe";
  const linkedIssues = "Apples & Oranges";
  const [state, setState] = useState({});

  function handleSelect(e: any) {
    setStatus(e.target.value);
  }

  const fetchIssueDetails = useCallback(async () => {
    await importApiModule();
    FetchDataAPI.getData(API_ISSUE.concat(issueId!)).then((res: any) => {
      setIssueTitle(res.data.name);
      setIssueDescription(res.data.description);
      setAssigneeName(res.data.assignUserId);
    });
  }, []);

  useEffect(() => {
    fetchIssueDetails();
    return () => {
      setState({});
    };
  }, []);

  return (
    <StyledPageWrapper>
      <PageHeader
        returnLink='Return to Awesome project'
        pageTitle={issueTitle}
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
              <IssueTitle>{projectName}</IssueTitle>
              <Box>
                <Label>{t("labelDescription")}</Label>
                <TextNormal>{issueDescription}</TextNormal>
              </Box>
              <Box>
                <Label>{t("labelLinkedIssues")}</Label>
                <TextOutlined>{linkedIssues}</TextOutlined>
              </Box>
            </Section>
          </Grid>
          <Grid item xs={4}>
            <Section>
              <Box>
                <Label>{t("labelAssignee")}</Label>
                <TextOutlined>{assigneeName}</TextOutlined>
              </Box>
              <Box>
                <Label>{t("labelReporter")}</Label>
                <TextOutlined>{reporterName}</TextOutlined>
              </Box>
            </Section>
          </Grid>
        </Grid>
      </IssueBodyContent>
    </StyledPageWrapper>
  );
};
