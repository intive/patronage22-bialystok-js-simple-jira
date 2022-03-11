import makeRequest from "../makeFetchRequest";

interface DataObject {
  [key: string]: any;
}

const FetchProjectsAPI = {
  getProjects: async function () {
    const response = await makeRequest("/api/project", "GET", null);
    const projects = await response.json();
    console.log("get projects - status:", response.status);
    return projects.data;
  },
  addProject: async function (projectToAdd: DataObject) {
    const response = await makeRequest("/api/project/", "POST", projectToAdd);
    const addedProject = await response.json();
    console.log("add project - status:", response.status);
    return addedProject;
  },
};

export default FetchProjectsAPI;
