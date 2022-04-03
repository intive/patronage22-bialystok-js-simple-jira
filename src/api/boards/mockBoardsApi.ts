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
    return { data: { items: [...boards] } };
  },

  addData: async function (url: string, boardToAdd: BoardType) {
    await sleep();
    console.log(boardToAdd);
    const newIndex = {
      id: boards.length + 1,
      name: boardToAdd.data.name,
      projectId: Number(boardToAdd.data.projectId),
      isActive: true,
      responseCode: 201,
    };
    boards = [...boards, newIndex];
    console.log(`Adding project... ${newIndex.name} response.status:`, 201);
    console.log(boards);
    return newIndex;
  },
  deleteData: async function (url: string) {
    await sleep();
    // const id = url[url.length - 1];

    // boards = [...boards];
    const res = {
      responseCode: 200,
      baseResponseError: null,
      message: "Board was deleted successfully",
      data: true,
    };
    console.log(`${res.message} response status:${res.responseCode}`);
    return res;
  },
};

export default MockBoardsAPI;
