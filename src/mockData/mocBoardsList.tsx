export const mockBoardsList = [
  {
    id: 1,
    alias: "Board1",
    name: "Board1",
    description: "Board1",
    projectId: 1,
    statusId: 1,
    boardId: "Board1",
    isActive: true,
    createdOn: "string",
    modifiedOn: "string",
    board_Status: [
      {
        boardId: 1,
        statusId: 1,
      },
    ],
  },
  {
    id: 2,
    alias: "Board2",
    name: "Board2",
    description: "Board2",
    projectId: 2,
    statusId: 2,
    boardId: "Board1",
    isActive: true,
    createdOn: "string",
    modifiedOn: "string",
    board_Status: [
      {
        boardId: 2,
        statusId: 2,
      },
    ],
  },
  {
    id: 3,
    alias: "Board3",
    name: "Board3",
    description: "Board3",
    projectId: 3,
    statusId: 3,
    boardId: "Board3",
    isActive: true,
    createdOn: "string",
    modifiedOn: "string",
    board_Status: [
      {
        boardId: 3,
        statusId: 3,
      },
    ],
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
