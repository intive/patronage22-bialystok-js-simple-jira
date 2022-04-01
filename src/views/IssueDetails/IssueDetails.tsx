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

import makeRequest from "../../api/makeFetchRequest";

import MockIssuesStatusAPI from "../../api/issues/mockIssuesStatusAPI";
import { API_ISSUE } from "../../api/contsans";

let FetchDataAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/issue/mockIssueDetails");
    FetchDataAPI = module.default;
  } else {
    const module = await import("../../api/requestsApi");
    FetchDataAPI = module.default;
  }
}

export const IssueDetails = () => {
  const { t } = useTranslation();

  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [assigneeName, setAssigneeName] = useState("");
  const reporterName = "Joe Doe";
  const linkedIssues = "Apples & Oranges";
  const [state, setState] = useState({});

  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [statusesApi, setStatusesApi] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);

  const { boardId, issueId, projectName } = useParams();

  const handleSelect = async (e: any) => {
    if (localStorage["USE_MOCK"] === "false") {
      const newStatusId = statusesApi.filter(
        (el) => el.iStatus === e.target.value
      );

      const patchData = async () => {
        const body = {
          statusId: {
            data: newStatusId[0].statusId,
          },
        };
        const response = await makeRequest(
          `https://patronageapi.herokuapp.com/api/issue/${issueId}`,
          "PATCH",
          body
        );
        const addedData = await response.json();
        return addedData;
      };
      await patchData();
    }
    setCurrentStatus(e.target.value);
  };

  const fetchIssueDetails = useCallback(async () => {
    await importApiModule();
    FetchDataAPI.getData(API_ISSUE.concat(issueId!)).then((res: any) => {
      setIssueTitle(res.data.name);
      setIssueDescription(res.data.description);
      setAssigneeName(res.data.assignUserId);
    });
  }, []);

  const fetchStatus = async () => {
    if (localStorage["USE_MOCK"] === "true") {
      const issueStatus = await MockIssuesStatusAPI.getIssueStatusById(issueId);

      setCurrentStatus(issueStatus);
      const availableStatuses = await MockIssuesStatusAPI.getStatuses();
      setStatuses(availableStatuses);
      return;
    }
    await importApiModule();
    const boardStatus = await FetchDataAPI.getBoardStatusById(boardId);
    const statusesFromApi = boardStatus[0].map((el: any) => ({
      statusId: el.statusId,
      iStatus: el.status.code,
    }));

    setStatusesApi(statusesFromApi);

    const statusesInString = statusesFromApi.map((el: any) => el.iStatus);
    setStatuses(statusesInString);

    const issueStatusId = await FetchDataAPI.getData(
      `https://patronageapi.herokuapp.com/api/issue/${issueId}`
    );

    const issueStatusString = await FetchDataAPI.getData(
      `https://patronageapi.herokuapp.com/api/status/id?id=${issueStatusId.data.statusId}`
    );

    setCurrentStatus(issueStatusString.data.code);
  };

  useEffect(() => {
    fetchStatus();
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
            options={statuses}
            value={currentStatus}
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
