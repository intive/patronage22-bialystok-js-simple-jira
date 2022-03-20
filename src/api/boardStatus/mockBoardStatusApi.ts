import { mockBoardStatus } from "../../mockData/mockBoardStatus";

const status = [...mockBoardStatus];

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
};

export default MockBoardStatusAPI;
