import { mockIssues } from "../../mockData/mockIssues";
import { IssueType } from "../../mockData/mockIssues";

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const mockIssueDetails = mockIssues[0];

const MockIssueDetailsAPI = {
  getData: async function (url: string) {
    await sleep();
    return { data: mockIssueDetails };
  },
  addData: async function (url: string, issueToAdd: IssueType) {
    const issueAdded = {
      alias: issueToAdd.name,
      name: issueToAdd.name,
      description: issueToAdd.description,
      projectId: issueToAdd.projectId,
      boardId: issueToAdd.boardId,
      statusId: issueToAdd.statusId,
      id: issueToAdd.id,
      isActive: true,
    };
    //TODO:add that ^ to mockIssueDetails
    return {
      responseCode: 200,
      baseResponseError: [
        {
          propertyName: issueToAdd.name,
          message: "Issue Added",
          code: "string",
        },
      ],
      message: "string",
      data: true,
    };
  },
};

export default MockIssueDetailsAPI;
