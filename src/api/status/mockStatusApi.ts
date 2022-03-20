import { mockBoardStatus } from "../../mockData/mockBoardStatus";

const status = [...mockBoardStatus];

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockStatusAPI = {
  getStatus: async function () {
    await sleep();
    console.log("Fetching status... response.status:", 200);
    return [...status];
  },
};

export default MockStatusAPI;
