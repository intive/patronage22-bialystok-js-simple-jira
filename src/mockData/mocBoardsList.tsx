export const mockBoardsList = [
  {
    id: 1,
    name: "Board1",
    projectId: 1,
    isActive: true,
  },
  {
    id: 2,
    name: "Board2",
    projectId: 2,
    isActive: true,
  },
  {
    id: 3,
    name: "Board3",
    projectId: 3,
    isActive: true,
  },
];

export interface BoardType {
  id: number;
  alias: string;
  name: string;
  description: string;
  projectId: number;
  statusId: number;
  boardId: number;
  isActive: boolean;
  createdOn: string;
  modifiedOn: string;
  board_Status: [
    {
      boardId: number;
      statusId: number;
    }
  ];
}
