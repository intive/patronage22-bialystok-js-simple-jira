import { mockStatus } from "../../mockData/mockBoardStatus";
import { mockIssues } from "../../mockData/mockIssues";

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockIssuesStatusAPI = {
  getIssueStatusById: async function (IssueStatusId: any) {
    await sleep();

    const IssueStatusFilteredById = mockIssues.filter((el) => {
      return el.id == IssueStatusId;
    });

    const issueString = mockStatus.data.filter((el) => {
      return el.id == IssueStatusFilteredById[0].statusId;
    });

    return issueString[0].code;
  },
  getStatuses: async function () {
    await sleep();

    const issueStatusInString = mockStatus.data.map((el) => {
      return el.code;
    });

    return [...issueStatusInString];
  },
};

export default MockIssuesStatusAPI;
