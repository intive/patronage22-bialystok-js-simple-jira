import FetchDataAPI from "../requestsApi";
import { API_GET_BOARD_STATUS, API_GET_STATUS } from "../contsans";

interface DataObject {
  [key: string]: any;
}

const FetchBoardStatusAPI = {
  getBoardStatusById: async function (id: number) {
    const boardStatus = await FetchDataAPI.getData(API_GET_BOARD_STATUS);
    const status = await FetchDataAPI.getData(API_GET_STATUS);

    const boardStatusFilteredById = boardStatus.filter(
      (boardStatus: DataObject) => {
        return boardStatus.boardId == id;
      }
    );

    if (boardStatusFilteredById.length < 1) {
      return [];
    } else {
      const boardStatusIds = boardStatusFilteredById.reduce(
        (statusIdsArray: [], currentStatus: DataObject) => {
          return [...statusIdsArray, currentStatus.statusId];
        },
        []
      );

      const statusFilteredByBoardStatusId = status.filter(
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

      return boardStatusFilteredByIdWithStatus;
    }
  },
};

export default FetchBoardStatusAPI;
