export interface IssueType {
  alias: string;
  name: string;
  description: string;
  projectId: number;
  boardId: number;
  statusId: number;
  id: number;
  createdOn: string;
  modifiedOn: string;
  isActive: boolean;
}

export const issueList: IssueType[] = [
  {
    alias: "Zupa była za słona.",
    name: "Zupa była za słona.",
    description: "Zupa była za słona.",
    projectId: 0,
    boardId: 0,
    statusId: 0,
    id: 0,
    createdOn: "2022-03-15T07:42:43.666Z",
    modifiedOn: "2022-03-15T07:42:43.667Z",
    isActive: true,
  },
  {
    alias: "Ziemniaczki były ok.",
    name: "Ziemniaczki były ok.",
    description: "Ziemniaczki były ok.",
    projectId: 0,
    boardId: 0,
    statusId: 1,
    id: 1,
    createdOn: "2022-03-15T07:42:43.666Z",
    modifiedOn: "2022-03-15T07:42:43.667Z",
    isActive: true,
  },
  {
    alias: "Czas na deser.",
    name: "Czas na deser.",
    description: "Czas na deser.",
    projectId: 0,
    boardId: 0,
    statusId: 2,
    id: 2,
    createdOn: "2022-03-15T07:42:43.666Z",
    modifiedOn: "2022-03-15T07:42:43.667Z",
    isActive: true,
  },
];
