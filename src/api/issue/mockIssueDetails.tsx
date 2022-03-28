import { mockIssues } from "../../mockData/mockIssues";

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
};

export default MockIssueDetailsAPI;
