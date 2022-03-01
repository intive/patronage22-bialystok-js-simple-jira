import { mockProjects, newMockProject } from "../../mockData/mockProjects";

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockProjectsAPI = {
  getProjects: async function () {
    await sleep();
    console.log("Fetching projects... response.status:", 200);
    return [...mockProjects];
  },
  addProject: async function (projectToAdd: any = newMockProject) {
    await sleep();
    const addedProject = { ...projectToAdd };
    const projects = [...mockProjects, projectToAdd];
    console.log(`Adding project... ${addedProject.name} response.status:`, 201);
    console.log(projects);
    return addedProject;
  },
};

export default MockProjectsAPI;
