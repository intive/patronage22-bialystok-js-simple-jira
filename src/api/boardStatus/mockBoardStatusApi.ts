import { mockBoardStatus, mockStatus } from "../../mockData/mockBoardStatus";
import { mockIssues } from "../../mockData/mockIssues";

interface DataObject {
  [key: string]: any;
}

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockBoardStatusAPI = {
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
    return { data: mockIssues, status: 200 };
  },
};

export default MockBoardStatusAPI;
