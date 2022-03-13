export interface ProjectType {
  name: string;
  id: string;
  isActive: boolean;
}

export const mockProjects: ProjectType[] | [] = [
  { name: "Project1", id: "1", isActive: true },
  { name: "Death Star", id: "2", isActive: true },
  { name: "Conquer The World", id: "3", isActive: true },
  { name: "Branch Party Project", id: "4", isActive: true },
  { name: "Find out who killed Kennedy", id: "5", isActive: true },
  { name: "Catch Them All", id: "6", isActive: true },
  { name: "Watermelon Jam", id: "7", isActive: true },
];

export const newMockProject = { name: "New project", id: 9999, isActive: true };
