export interface BoardList {
  id?: number;
  alias?: string;
  name: string;
  description?: string;
  projectId?: number;
  statusId?: number;
  boardId?: null;
  isActive?: boolean;
  createdOn?: string;
  modifiedOn?: string;
  board_Status?: null;
}

export interface ProjectByID {
  id: number;
  alias: string;
  name: string;
  description: string;
  isActive: boolean;
  createdOn: string;
  modifiedOn: string;
}
