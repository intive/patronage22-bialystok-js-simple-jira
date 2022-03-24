import { mockBoardsList, BoardType } from "../../mockData/mocBoardsList";

let boards = [...mockBoardsList];

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockBoardsAPI = {
  getData: async function () {
    await sleep();
    console.log("Fetching projects... response.status:", 200);
    return { data: [...boards] };
  },

  addData: async function (url: string, boardToAdd: BoardType) {
    await sleep();
    const newIndex = {
      id: boards.length + 1,
      name: boardToAdd.name,
      projectId: Number(boardToAdd.projectId),
      isActive: true,
      responseCode: 201,
    };
    boards = [...boards, newIndex];
    console.log(`Adding project... ${newIndex.name} response.status:`, 201);
    console.log(boards);
    return newIndex;
  },
};

export default MockBoardsAPI;
