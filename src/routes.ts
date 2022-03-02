const PROJECT = ":projectID";
const BOARD = ":boardID";
const ISSUE = ":issueID";

export const toHome = "/home";
export const toProjects = "/projects";

export const toProject = ({ projectID } = { projectID: PROJECT }) =>
  `${toProjects}/${projectID}/boards`;

export const toBoard = (
  { projectID, boardID } = {
    projectID: PROJECT,
    boardID: BOARD,
  }
) => `${toProject({ projectID })}/${boardID}/issues`;

export const toIssue = (
  { projectID, boardID, issueID } = {
    projectID: PROJECT,
    boardID: BOARD,
    issueID: ISSUE,
  }
) => `${toBoard({ projectID, boardID })}/${issueID}`;
