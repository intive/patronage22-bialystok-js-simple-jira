import makeRequest from "../makeFetchRequest";

interface DataObject {
  [key: string]: any;
}

const FetchStatusAPI = {
  getStatus: async function () {
    const response = await makeRequest("/api/status", "GET", null);
    const projects = await response.json();
    console.log("get status - status:", response.status);
    return projects.data;
  },
};

export default FetchStatusAPI;
