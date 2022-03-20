import FetchDataAPI from "../requestsApi";
import { API_GET_BOARD_STATUS, API_GET_STATUS } from "../contsans";

interface DataObject {
  [key: string]: any;
}

const FetchBoardStatusAPI = {
  getBoardStatusById: async function (id: number) {
    const boardStatus = await FetchDataAPI.getData(API_GET_BOARD_STATUS);
    const status = await FetchDataAPI.getData(API_GET_STATUS);

    const filteredBoardStatus = boardStatus.filter(
      (boardStatus: DataObject) => {
        return boardStatus.boardId == id;
      }
    );

    if (filteredBoardStatus.length < 1) {
      return [];
    } else {
      const boardStatusIds = filteredBoardStatus.reduce(
        (statusIdsArray: [], curr: DataObject) => {
          return [...statusIdsArray, curr.statusId];
        },
        []
      );

      const filteredStatus = status.filter((status: DataObject) => {
        return boardStatusIds.includes(status.id);
      });
      return filteredStatus;
    }
  },
};

export default FetchBoardStatusAPI;
