import { useState, useEffect } from "react";
import { StyledBoardList, StyledPageWrapper } from "./BoardsList.style";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { ConfirmationDialog } from "@modules/ConfirmationDialog/ConfirmationDialog";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import Content from "@components/Content/Content";
import { Button } from "@components/Button/Button";
import { mockBoardsList } from "../../mockData/mocBoardsList";
import { useParams } from "react-router-dom";

let FetchProjectsAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/projects/mockProjectsApi");
    FetchProjectsAPI = module.default;
  } else {
    const module = await import("../../api/projects/projectsApi");
    FetchProjectsAPI = module.default;
  }
}

export const BoardsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [boardsList, setBoardsList] = useState(mockBoardsList);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const { projectID: projectName } = useParams();

  const { t } = useTranslation();

  //   const deleteProjectHandler = (id: string) => {
  //     const newProjectsList = projects.filter(
  //       (element: any) => element.id !== id
  //     );
  //     setProjects(newProjectsList);
  //   };

  //   useEffect(() => {
  //     async function fetchProjects() {
  //       await importApiModule();
  //       const projects = await FetchProjectsAPI.getProjects();
  //       setProjects(projects);

  //       setIsLoading(false);
  //     }
  //     fetchProjects();
  //   }, []);

  return (
    <StyledPageWrapper>
      {/* <ConfirmationDialog
          confirmHandler={() => {
            deleteProjectHandler(projects[current].id);
            setIsDialogOpen(false);
          }}
          isOpen={isDialogOpen}
          handleClose={() => setIsDialogOpen(false)}
        >
          {t("deleteProjectWarning")}
        </ConfirmationDialog> */}
      <PageHeader
        pageTitle={`${t("labelProject")} ${projectName}`}
        interactiveElement={
          <Button onClick={() => console.log("works")}>
            {t("newProjectBtn")}
          </Button>
        }
      />
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
                        label: "Delete project",
                        onClick: () => {
                          setIsDialogOpen(true);
                          setCurrent(id);
                        },
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
