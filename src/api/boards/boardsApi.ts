import makeRequest from "../makeFetchRequest";

interface DataObject {
  [key: string]: any;
}

const FetchBoardsAPI = {
  getBoards: async function () {
    const response = await makeRequest("/api/board/list", "GET", null);
    const boards = await response.json();
    console.log("get boards - status:", response.status);
    return boards.data;
  },
  addBoard: async function (boardToAdd: DataObject) {
    const response = await makeRequest("/api/board/create", "POST", boardToAdd);
    const addedBoard = await response.json();
    console.log("add board - status:", response.status);
    return addedBoard;
  },
};

export default FetchBoardsAPI;
