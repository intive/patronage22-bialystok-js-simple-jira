import { mockBoardsList, BoardType } from "../../mockData/mocBoardsList";

const boards = [...mockBoardsList];

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockBoardsAPI = {
  getData: async function () {
    await sleep();
    console.log("Fetching projects... response.status:", 200);
    return [...boards];
  },

  addData: async function (boardToAdd: BoardType) {
    await sleep();
    const addedBoard = {
      ...boardToAdd,
      isActive: true,
      responseCode: 201,
    };
    const newProjects = [...boards, boardToAdd];
    console.log(`Adding project... ${addedBoard.name} response.status:`, 201);
    console.log(newProjects);
    return addedBoard;
  },
};

export default MockBoardsAPI;
