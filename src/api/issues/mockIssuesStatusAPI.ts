import { mockBoardStatus, mockStatus } from "../../mockData/mockBoardStatus";
import { mockIssues } from "../../mockData/mockIssues";

interface DataObject {
  [key: string]: any;
}

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockIssuesStatusAPI = {
  getIssueStatusById: async function (IssueStatusId: any) {
    await sleep();
    console.log("Fetching board status... response.status:", 200);
    console.log("Fetching status... response.status:", 200);
    const boardStatus = mockBoardStatus;
    const status = mockStatus;

    const IssueStatusFilteredById = mockIssues.filter((el) => {
      return el.id == IssueStatusId;
    });

    const issueString = mockStatus.data.filter((el) => {
      return el.id == IssueStatusFilteredById[0].statusId;
    });
    console.log(issueString[0].code);

    return issueString[0].code;
  },
  getStatuses: async function () {
    await sleep();

    const issueStatusInString = mockStatus.data.map((el) => {
      return el.code;
    });
    console.log(issueStatusInString);

    return [...issueStatusInString];
  },
};

export default MockIssuesStatusAPI;
