export interface ProjectTypes {
  name: string;
  id: string;
}

export const mockProjects: ProjectTypes[] | [] = [
  { name: "Project1", id: "1" },
  { name: "Death Star", id: "2" },
  { name: "Conquer The World", id: "3" },
  { name: "Branch Party Project", id: "4" },
  { name: "Find out who killed Kennedy", id: "5" },
  { name: "Catch Them All", id: "6" },
  { name: "Watermelon Jam", id: "7" },
];

export const newMockProject = { name: "New project", id: 9999 };
