const PROJECT = ":projectID";
const BOARD = ":boardID";
const ISSUE = ":issueID";

export const toHome = "/home";
export const toProjects = "/projects";

export const toBoards = ({ projectID } = { projectID: PROJECT }) =>
  `/${toProjects}/${projectID}/boards`;

export const toIssues = (
  { projectID, boardID } = {
    projectID: PROJECT,
    boardID: BOARD,
  }
) => `/${toBoards({ projectID })}/${boardID}/issues`;

export const toIssue = (
  { projectID, boardID, issueID } = {
    projectID: PROJECT,
    boardID: BOARD,
    issueID: ISSUE,
  }
) => `/${toIssues({ projectID, boardID })}/${issueID}`;
