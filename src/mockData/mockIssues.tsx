export interface IssueType {
  alias: string;
  name: string;
  description: string;
  projectId: number;
  boardId: number;
  statusId: number;
  id: number;
  isActive: boolean;
}

export const mockIssues = [
  {
    alias: "mock issue 1",
    name: "mock issue 1",
    description: "mock issue 1",
    projectId: 1,
    boardId: 1,
    statusId: 1,
    id: 0,
    isActive: true,
    assignUserId: "Han Solo",
  },
  {
    alias: "mock issue 2",
    name: "mock issue 2",
    description: "mock issue 2",
    projectId: 1,
    boardId: 1,
    statusId: 1,
    id: 1,
    isActive: true,
  },
  {
    alias: "mock issue 3",
    name: "mock issue 3",
    description: "mock issue 3",
    projectId: 1,
    boardId: 1,
    statusId: 2,
    id: 2,
    isActive: true,
  },
];
