import { mockProjects, ProjectType } from "../../mockData/mockProjects";

let projects = [...mockProjects];

function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockProjectsAPI = {
  getData: async function (url: string) {
    await sleep();
    console.log("Fetching projects... response.status:", 200);
    return { data: [...projects] };
  },

  addData: async function (url: string, projectToAdd: ProjectType) {
    await sleep();
    const addedProject = {
      ...projectToAdd,
      isActive: true,
      responseCode: 201,
    };
    projects = [...projects, projectToAdd];
    console.log(`Adding project... ${addedProject.name} response.status:`, 201);
    return addedProject;
  },

  deleteData: async function (url: string, additionalData?: any) {
    await sleep();
    const link = url.split("/");
    const id = link[5];
    const response = { status: 200 };
    const projectsAfterDeleted = projects.filter((project) => project.id != id);
    projects = projectsAfterDeleted;

    return response;
  },
};

export default MockProjectsAPI;
