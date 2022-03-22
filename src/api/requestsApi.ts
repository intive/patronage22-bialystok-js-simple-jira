import makeRequest from "./makeFetchRequest";
import { API_GET_BOARD_STATUS, API_GET_STATUS } from "./contsans";

interface DataObject {
  [key: string]: any;
}

const FetchDataAPI = {
  getData: async function (url: string) {
    const response = await makeRequest(url, "GET", null);
    const fetchedData = await response.json();
    return fetchedData;
  },
  addData: async function (url: string, dataToAdd?: any) {
    const response = await makeRequest(url, "POST", dataToAdd);
    const addedData = await response.json();
    return addedData;
  },
  getBoardStatusById: async function (id: number) {
    const boardStatus = await FetchDataAPI.getData(API_GET_BOARD_STATUS);
    const status = await FetchDataAPI.getData(API_GET_STATUS);

    const filteredBoardStatus = boardStatus.data.filter(
      (boardStatus: DataObject) => {
        return boardStatus.boardId == id;
      }
    );

    if (filteredBoardStatus.length < 1) {
      return [, status.data];
    } else {
      const boardStatusIds = filteredBoardStatus.reduce(
        (statusIdsArray: [], curr: DataObject) => {
          return [...statusIdsArray, curr.statusId];
        },
        []
      );

      const filteredStatus = status.data.filter((status: DataObject) => {
        return boardStatusIds.includes(status.id);
      });
      return [filteredStatus, status.data];
    }
  },
  deleteData: async function (url: string, dataToAdd?: any) {
    const response = await makeRequest(url, "DELETE", dataToAdd);
    return response;
  },
};

export default FetchDataAPI;
