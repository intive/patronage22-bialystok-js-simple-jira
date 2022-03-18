import makeRequest from "../makeFetchRequest";

interface DataObject {
  [key: string]: any;
}

const FetchBoardStatusAPI = {
  getBoardStatusById: async function (id: number) {
    const response = await makeRequest("/api/boardStatus", "GET", null);
    const boardStatus = await response.json();

    const response2 = await makeRequest("/api/status", "GET", null);
    const status = await response2.json();

    const filteredBoardStatus = boardStatus.data.filter(
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

      const filteredStatus = status.data.filter((status: DataObject) => {
        return boardStatusIds.includes(status.id);
      });
      return filteredStatus;
    }
  },
};

export default FetchBoardStatusAPI;
