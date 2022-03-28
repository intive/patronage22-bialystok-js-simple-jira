import { useState, useEffect } from "react";
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

let FetchDataAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/issues/mockIssuesStatusAPI");
    FetchDataAPI = module.default;
  } else {
    const module = await import("../../api/requestsApi");
    FetchDataAPI = module.default;
  }
}

export const IssueDetails = () => {
  const { t } = useTranslation();

  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [statusesApi, setStatusesApi] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);

  const { boardId, issueId } = useParams();

  const handleSelect = async (e: any) => {
    if (localStorage["USE_MOCK"] === "true") {
      setCurrentStatus(e.target.value);
    } else {
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
      setCurrentStatus(e.target.value);
    }
  };

  useEffect(() => {
    async function fetchStatus() {
      if (localStorage["USE_MOCK"] === "true") {
        const issueStatus = await MockIssuesStatusAPI.getIssueStatusById(
          issueId
        );

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
    }
    fetchStatus();
  }, []);

  return (
    <StyledPageWrapper>
      <PageHeader
        returnLink='Return to Awesome project'
        pageTitle='The Best Issue'
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
