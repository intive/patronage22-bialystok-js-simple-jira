import { mockBoardStatus } from "../../mockData/mockBoardStatus";
import { mockIssues } from "../../mockData/mockIssues";

const status = [...mockBoardStatus];
const issues = [...mockIssues];

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockBoardStatusAPI = {
  getBoardStatusById: async function (id: number) {
    await sleep();
    console.log("Fetching board status... response.status:", 200);
    return [...status];
  },
  getIssuesByBoardStatusId: async function (id: number) {
    await sleep();
    console.log("Fetching issues... response.status:", 200);
    return [...issues];
  },
};

export default MockBoardStatusAPI;
