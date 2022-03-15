import * as React from "react";
import { useState } from "react";
import { StyledBoardList, StyledPageWrapper } from "./BoardsList.style";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Button } from "@components/Button/Button";
import { mockBoardsList } from "../../mockData/mocBoardsList";
import { useParams } from "react-router-dom";
import NewProjectDialog from "@modules/NewProjectDialog/NewProjectDialog";
import { Alert } from "@mui/material";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";

export const BoardsList = () => {
  const [boardsList, setBoardsList] = useState(mockBoardsList);
  const { project: projectName } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);
  const [boardAddedSuccess, setBoardAddedSuccess] = useState(false);
  const [boardAddedError, setBoardAddedError] = useState(false);
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const handleAddNewBoard = (boardName: string) => {
    if (boardsList.find((board) => board.name === boardName.toLowerCase())) {
      setBoardNameAlert(true);
    } else {
      boardsList.length < 5
        ? setBoardsList([...boardsList, { name: boardName.toLowerCase() }])
        : setBoardNumberAlert(true);
    }
  };

  const handleAddNewBoardAPI = (boardName: string) => {
    setOpen(true);
    const date = new Date();
    date.toISOString();
    const data = {
      data: {
        id: 0,
        alias: boardName,
        name: boardName,
        description: boardName,
        projectId: 1,
        statusId: 0,
        boardId: 1,
        isActive: true,
        createdOn: date,
        modifiedOn: date,
        board_Status: [
          {
            boardId: 0,
            statusId: 0,
          },
        ],
      },
    };

    fetch("/api/board/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
        if (data.responseCode == 200) {
          setBoardAddedSuccess(true);
        } else {
          setBoardAddedError(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <StyledPageWrapper>
      <PageHeader
        pageTitle={`${t("labelProject")}: ${projectName}`}
        interactiveElement={
          <Button onClick={() => setIsDialogOpen(true)}>
            {t("newBoardBtn")}
          </Button>
        }
      />
      {boardNumberAlert && (
        <Alert onClose={() => setBoardNumberAlert(false)} severity='error'>
          {t("boardAlertNumber")}
        </Alert>
      )}
      {boardNameAlert && (
        <Alert onClose={() => setBoardNameAlert(false)} severity='error'>
          {t("boardAlertName")}
        </Alert>
      )}
      <NewProjectDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        dialogTitle={t("boardDialogTitle")}
        dialogHelper={t("boardDialogHelperText")}
        handleClick={handleAddNewBoardAPI}
        board
      />
      {boardAddedError && (
        <AlertError
          alertMsg={t("NewBoardAddedWithError")}
          isOpen={open}
          handleClose={() => setBoardAddedError(false)}
        />
      )}
      {boardAddedSuccess && (
        <AlertSuccess
          alertMsg={t("NewBoardAddedWithSuccess")}
          isOpen={open}
          handleClose={() => setBoardAddedSuccess(false)}
        />
      )}
      <StyledBoardList>
        <Grid container spacing={3}>
          {boardsList?.map((board: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <BoardCard
                menuComponent={
                  <ThreeDotsMenu
                    menuItems={[
                      {
                        id: 0,
                        icon: <ViewWeekOutlinedIcon />,
                        label: "Add column",
                        onClick: () => console.log("column added"),
                      },
                      {
                        id: 1,
                        icon: <DeleteOutlineIcon />,
                        label: "Delete board",
                        onClick: () => console.log("board deleted"),
                      },
                    ]}
                  />
                }
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
