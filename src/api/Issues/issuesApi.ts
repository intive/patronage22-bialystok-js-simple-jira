import makeRequest from "../makeFetchRequest";

interface DataObject {
  [key: string]: any;
}

const FetchIssuesAPI = {
  getIssue: async function () {
    const response = await makeRequest("/api/issue/list", "GET", null);
    const boards = await response.json();
    console.log("get boards - status:", response.status);
    return boards.data;
  },
  addIssue: async function (boardToAdd: DataObject) {
    const response = await makeRequest("/api/issue/create", "POST", boardToAdd);
    const addedIssue = await response.json();
    console.log("add issue - status:", response.status);
    return addedIssue;
  },
};

export default FetchIssuesAPI;
