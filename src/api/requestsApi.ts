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

    const boardStatusFilteredById = boardStatus.data.filter(
      (boardStatus: DataObject) => {
        return boardStatus.boardId == id;
      }
    );

    if (boardStatusFilteredById.length < 1) {
      return [];
    } else {
      const boardStatusIds = boardStatusFilteredById.map(
        (boardStatus: DataObject) => {
          return boardStatus.statusId;
        }
      );

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

      return boardStatusFilteredByIdWithStatus;
    }
  },
  getIssuesByBoardStatusId: async function (id: number) {
    const data = await FetchDataAPI.getData(
      `https://patronageapi.herokuapp.com/api/issue?BoardId=${id}&PageNumber=1&PageSize=15`
    );
    return data.data.items;
  },
};

export default FetchDataAPI;
