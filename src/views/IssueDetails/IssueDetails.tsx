import { useCallback, useEffect, useState, useReducer } from "react";
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
import { API_ISSUE, USER_LIST } from "../../api/contsans";

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

const initialState = {
  issueTitle: "",
  issueDescription: "",
  reporterName: "Joe Doe",
  linkedIssues: "Apples & Oranges",
  assigneeName: "",
  userNames: [],
};

const reducer = (state: any, action: any) => {
  if (action.type === "FILL_COMPONENT_WITH_DATA") {
    return {
      ...state,
      assigneeName: action.payload.assigneeName,
      issueTitle: action.payload.name,
      issueDescription: action.payload.description,
      reporterName: "Joe Doe",
      linkedIssues: "Apples & Oranges",
      userNames: action.payload.userNames,
    };
  }
  if (action.type === "ASSIGN_USER") {
    return {
      ...state,
      assigneeName: action.payload,
    };
  }
};

export const IssueDetails = () => {
  const { t } = useTranslation();

  const [issueDetailsState, dispatch] = useReducer(reducer, initialState);

  const [state, setState] = useState({});
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [statusesApi, setStatusesApi] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  const { boardId, issueId, projectName } = useParams();

  useEffect(() => {
    fetchUsers();
    fetchIssueDetails();
    fetchStatus();
    return () => {
      setState({});
    };
  }, []);

  useEffect(() => {
    fetchIssueDetails();
    return () => {
      setState({});
    };
  }, [issueDetailsState.assigneeName]);

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
    FetchDataAPI.getIssueWithAssignedUser(issueId).then((data: any) => {
      dispatch({ type: "FILL_COMPONENT_WITH_DATA", payload: data });
    });
  }, []);

  const fetchUsers = useCallback(async () => {
    await importApiModule();
    const users = await FetchDataAPI.getData(USER_LIST);
    setUsers(users.data);
  }, []);

  const handleChangeAssignee = (e: any) => {
    const assignTask = async () => {
      const assignedUser = users.find(
        (user: any) => user.userName === e.target.value
      );
      if (assignedUser) {
        await FetchDataAPI.updateData(
          `https://patronageapi.herokuapp.com/api/issue/${issueId}/assign/${assignedUser.id}`
        );
        dispatch({ type: "ASSIGN_USER", payload: assignedUser.userName });
      } else {
        const response = await FetchDataAPI.getData(`${API_ISSUE}${issueId}`);
        const updatedIssue = {
          ...response.data,
          assignUserId: null,
          name: response.data.name + "1",
          alias: response.data.alias + "1",
        };
        await FetchDataAPI.updateData(
          `https://patronageapi.herokuapp.com/api/issue/${issueId}`,
          updatedIssue
        );
        dispatch({ type: "ASSIGN_USER", payload: "" });
      }
    };
    assignTask();
  };

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

  return (
    <StyledPageWrapper>
      <PageHeader
        returnLink='Return to Awesome project'
        pageTitle={issueDetailsState.issueTitle}
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
                <TextNormal>{issueDetailsState.issueDescription}</TextNormal>
              </Box>
              <Box>
                <Label>{t("labelLinkedIssues")}</Label>
                <TextOutlined>{issueDetailsState.linkedIssues}</TextOutlined>
              </Box>
            </Section>
          </Grid>
          <Grid item xs={4}>
            <Section>
              <Box>
                <Label>{t("labelAssignee")}</Label>
                <Select
                  value={issueDetailsState.assigneeName}
                  options={issueDetailsState.userNames}
                  handleSelect={handleChangeAssignee}
                />
              </Box>
              <Box>
                <Label>{t("labelReporter")}</Label>
                <TextOutlined>{issueDetailsState.reporterName}</TextOutlined>
              </Box>
            </Section>
          </Grid>
        </Grid>
      </IssueBodyContent>
    </StyledPageWrapper>
  );
};
