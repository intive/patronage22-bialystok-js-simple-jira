import makeRequest from "./makeFetchRequest";
import {
  API_GET_BOARD_STATUS,
  API_GET_STATUS,
  API_ISSUE,
  USER_LIST,
} from "./contsans";

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
  deleteData: async function (url: string, additionalData?: any) {
    const response = await makeRequest(url, "DELETE", additionalData);
    return response;
  },
  updateData: async function (url: string, additionalData?: any) {
    const response = await makeRequest(url, "PUT", additionalData);
    return response;
  },
  getBoardStatusById: async function (id: number) {
    const boardStatus = await FetchDataAPI.getData(
      `${API_GET_BOARD_STATUS}?BoardId=${id}`
    );
    const status = await FetchDataAPI.getData(API_GET_STATUS);

    const boardStatusArray = boardStatus.data.items;

    if (boardStatusArray.length < 1) {
      return [[], status.data];
    } else {
      const boardStatusIds = boardStatusArray.map((boardStatus: DataObject) => {
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

      const boardStatusFilteredByIdWithStatus = boardStatusArray.map(
        (boardStatus: any) => {
          return { ...boardStatus, status: statusObject[boardStatus.statusId] };
        }
      );

      return [boardStatusFilteredByIdWithStatus, status.data];
    }
  },

  getIssuesByBoardStatusId: async function (id: number) {
    const data = await FetchDataAPI.getData(
      `https://patronageapi.herokuapp.com/api/issue?BoardId=${id}&PageNumber=1&PageSize=20`
    );
    return data.data.items;
  },
  deleteIssue: async function (id: string) {
    const data = await FetchDataAPI.deleteData(`${API_ISSUE}${id}`);
    return data;
  },

  updateTicket: async function (url: string, additionalData: any) {
    await makeRequest(url, "PATCH", additionalData);
  },
  getIssueWithAssignedUser: async function (id: any) {
    const issue = await FetchDataAPI.getData(API_ISSUE.concat(id!));
    const users = await FetchDataAPI.getData(USER_LIST);
    const assignedUser = users.data.find((user: any) => {
      return user.id === issue.data.assignUserId;
    });
    const userNames = users.data.map((user: any) => user.userName);
    return {
      ...issue.data,
      assigneeName: assignedUser?.userName || "",
      userNames,
    };
  },
};

export default FetchDataAPI;
