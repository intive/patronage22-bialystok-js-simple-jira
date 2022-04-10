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
    console.log(projects);
    return { data: [...projects] };
  },

  addData: async function (url: string, projectToAdd: ProjectType) {
    await sleep();
    projectToAdd.id = `${
      projects.length + Math.floor(Math.random() * (99 - 1)) + 1
    }`;
    const addedProject = {
      ...projectToAdd,
      responseCode: 201,
    };

    projects = [...projects, addedProject];
    console.log(`Adding project... ${projectToAdd.name} response.status:`, 201);
    return projectToAdd;
  },

  deleteData: async function (url: string, additionalData?: any) {
    console.log(url);
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
