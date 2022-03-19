import makeRequest from "./makeFetchRequest";

const FetchDataAPI = {
  getData: async function (url: string) {
    const response = await makeRequest(url, "GET", null);
    const fetchedData = await response.json();
    console.log("get projects - status:", response.status);
    return fetchedData.data;
  },
  addData: async function (url: string, dataToAdd: any) {
    const response = await makeRequest(url, "POST", dataToAdd);
    const addedData = await response.json();
    console.log("add project - status:", response.status);
    return addedData;
  },
};

export default FetchDataAPI;
