import { mockProjects, ProjectType } from "../../mockData/mockProjects";

const projects = [...mockProjects];

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockProjectsAPI = {
  getProjects: async function () {
    await sleep();
    console.log("Fetching projects... response.status:", 200);
    return [...projects];
  },
  addProject: async function (projectToAdd: ProjectType) {
    await sleep();
    const addedProject = { ...projectToAdd, isActive: true };
    const newProjects = [...projects, projectToAdd];
    console.log(`Adding project... ${addedProject.name} response.status:`, 201);
    console.log(newProjects);
    return addedProject;
  },
};

export default MockProjectsAPI;
