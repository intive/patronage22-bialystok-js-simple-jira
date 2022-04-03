import { mockBoardsList, BoardType } from "../../mockData/mocBoardsList";
import { mockBoardStatus, mockStatus } from "../../mockData/mockBoardStatus";
import { mockIssues } from "../../mockData/mockIssues";

let boards = [...mockBoardsList];

interface DataObject {
  [key: string]: any;
}

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
      ok: true,
    };
    console.log(`${res.message} response status:${res.responseCode}`);
    return res;
  },
  getBoardStatusById: async function (id: number) {
    await sleep();
    console.log("Fetching board status... response.status:", 200);
    console.log("Fetching status... response.status:", 200);
    const boardStatus = mockBoardStatus;
    const status = mockStatus;

    const boardStatusFilteredById = boardStatus.data.filter((boardStatus) => {
      return boardStatus.boardId == 1;
    });

    if (boardStatusFilteredById.length < 1) {
      return [[], status.data];
    } else {
      const boardStatusIds = boardStatusFilteredById.map((boardStatus) => {
        return boardStatus.statusId;
      });

      const statusFilteredByBoardStatusId = status.data.filter(
        (status: DataObject) => {
          return boardStatusIds.includes(status.id);
        }
      );

      const statusObject: DataObject = {};

      statusFilteredByBoardStatusId.forEach((obj: any) => {
        statusObject[obj.id] = obj;
      });

      const boardStatusFilteredByIdWithStatus = boardStatusFilteredById.map(
        (boardStatus: any) => {
          return { ...boardStatus, status: statusObject[boardStatus.statusId] };
        }
      );

      return [boardStatusFilteredByIdWithStatus, status.data];
    }
  },
  getIssuesByBoardStatusId: async function (id: number) {
    await sleep();
    console.log("Fetching issues... response.status:", 200);
    return [...mockIssues];
  },
  deleteIssue: async function (id: number) {
    await sleep();
    console.log(`Deleting issue with an id of ${id} response.status:`, 200);
    return { data: mockIssues, status: 200, ok: true };
  },
};

export default MockBoardsAPI;
