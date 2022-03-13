import { useEffect, useState } from "react";
import { StyledBoardList, StyledPageWrapper } from "./BoardsList.style";
import { useTranslation } from "react-i18next";
import {
  API_BOARD_LIST,
  API_PROJECT_BY_ID,
  API_ADD_NEW_BOARD,
} from "../../api/constans";
import { BoardList, ProjectByID } from "../../api/interfaces";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Button } from "@components/Button/Button";
import { mockBoardsList } from "../../mockData/mocBoardsList";
import { useParams } from "react-router-dom";
import { useSingleDataRequest, useDataRequest } from "src/hooks/useRequest";
import NewProjectDialog from "@modules/NewProjectDialog/NewProjectDialog";
import nextId from "react-id-generator";

export const BoardsList = () => {
  const [boardsList, setBoardsList] = useState<BoardList[]>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [projectName, setProjectName] = useState<string>();
  const { projectID: projectID } = useParams();

  const { t } = useTranslation();

  const menuOpttions = [
    {
      id: 0,
      icon: <ViewWeekOutlinedIcon />,
      label: `${t("addColumn")}`,
      onClick: () => console.log("column added"),
    },
    {
      id: 1,
      icon: <DeleteOutlineIcon />,
      label: `${t("deleteBoard")}`,
      onClick: () => console.log("board deleted"),
    },
  ];

  const name = useSingleDataRequest(`${API_PROJECT_BY_ID}/${projectID}`, "GET");
  const boards = useDataRequest(API_BOARD_LIST, "GET");

  useEffect(() => {
    setProjectName(name?.name);
  }, [name]);

  useEffect(() => {
    const boardsByID = boards?.filter(
      (board) => board.projectId === Number(projectID)
    );
    boardsByID?.length === 0
      ? setBoardsList(mockBoardsList)
      : setBoardsList(boardsByID);
  }, [boards]);

  const handleAddNewBoard = (value: any) => {
    console.log(value);

    const boardId = nextId();
    const data = {
      id: boardId,
      alias: value,
      name: value,
      description: "string",
      projectId: projectID,
      statusId: 0,
      boardId: boardId,
      isActive: true,
      createdOn: new Date(),
      modifiedOn: new Date(),
      board_Status: [
        {
          boardId: boardId,
          statusId: 0,
        },
      ],
    };

    console.log(data);
    setIsCreateModalOpen(false);
  };

  return (
    <StyledPageWrapper>
      <PageHeader
        pageTitle={`${t("projectBoards")} ${projectName}`}
        interactiveElement={
          <Button onClick={() => setIsCreateModalOpen(true)}>
            {t("newBoardBtn")}
          </Button>
        }
      />
      <StyledBoardList>
        <NewProjectDialog
          isOpen={isCreateModalOpen}
          setIsOpen={setIsCreateModalOpen}
          dialogTitle={t("createNewBoard")}
          dialogHelper={t("boardDialogHelperText")}
          handleClick={handleAddNewBoard}
        />
        <Grid container spacing={3}>
          {boardsList?.map((board: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <BoardCard
                menuComponent={<ThreeDotsMenu menuItems={menuOpttions} />}
                boardName={board.name}
                projectName={`${projectName}`}
              />
            </Grid>
          ))}
        </Grid>
      </StyledBoardList>
    </StyledPageWrapper>
  );
};
