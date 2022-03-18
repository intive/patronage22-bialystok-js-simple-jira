import { useState, useEffect, useCallback } from "react";
import { StyledPageWrapper } from "./Projects.style";
import { FetchDataAPI } from "../../api/requestsApi";
import { API_ADD_NEW_PROJECT, API_GET_PROJECTS_LIST } from "../../api/contsans";
import { useTranslation } from "react-i18next";
import { ConfirmationDialog } from "@modules/ConfirmationDialog/ConfirmationDialog";
import PageHeader from "@modules/PageHeader/PageHeader";
import Content from "@components/Content/Content";
import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { ProjectType } from "src/mockData/mockProjects";
import { ProjectsList } from "@modules/ProjectsList/ProjectsList";
import { Button } from "@components/Button/Button";
import { EmptyListModule } from "@modules/EmptyListModule/EmptyListModule";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isDltDialogOpen, setIsDltDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isAlertProjectSuccessOpen, setIsAlertProjectSuccessOpen] =
    useState(false);
  const [isAlertProjectErrorOpen, setIsAlertProjectErrorOpen] = useState(false);

  const { t } = useTranslation();

  const deleteProjectHandler = (id: number) => {
    const newProjectsList = projects.filter(
      (element: any) => element.id !== id
    );
    setProjects(newProjectsList);
  };

  const handleAddNewProject = (inputValue: string) => {
    FetchDataAPI.addData(API_ADD_NEW_PROJECT, {
      alias: inputValue,
      name: inputValue,
      description: "We are not doing that, yet.",
      isActive: true,
    }).then((res: any) =>
      res.responseCode
        ? setIsAlertProjectSuccessOpen(true)
        : setIsAlertProjectErrorOpen(true)
    );
  };

  const fetchProjects = useCallback(async () => {
    const projects = await FetchDataAPI.getData(API_GET_PROJECTS_LIST);
    setProjects(projects);
    setIsLoading(false);
  }, [projects]);

  useEffect(() => {
    fetchProjects();
  }, [isCreateDialogOpen]);

  return (
    <>
      <Content
        isLoading={isLoading}
        noContentToShow={!projects || projects.length === 0}
      >
        <StyledPageWrapper>
          <ConfirmationDialog
            confirmHandler={() => {
              deleteProjectHandler(current);
              setIsDltDialogOpen(false);
            }}
            isOpen={isDltDialogOpen}
            handleClose={() => setIsDltDialogOpen(false)}
          >
            {t("deleteProjectWarning")}
          </ConfirmationDialog>
          <NewItemDialog
            isOpen={isCreateDialogOpen}
            setIsOpen={setIsCreateDialogOpen}
            dialogTitle={t("dialogCreateProjectTitle")}
            dialogHelper={t("dialogCreateProjectHelperText")}
            handleAdd={handleAddNewProject}
          />

          <PageHeader
            pageTitle={t("projectsViewTitle")}
            interactiveElement={
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                {t("newProjectBtn")}
              </Button>
            }
          />
          {projects.length === 0 ? (
            <EmptyListModule
              secondary
              description={t("emptyProjectsListDescription")}
              buttonText={t("emptyProjectsListButton")}
              addNew={handleAddNewProject}
              dialogTitle={t("dialogCreateProjectTitle")}
              dialogHelper={t("dialogCreateProjectHelperText")}
              isOpen={isCreateDialogOpen}
              setIsOpen={setIsCreateDialogOpen}
            />
          ) : (
            <ProjectsList
              projects={projects}
              dltProjectHandler={(projectId: any) => {
                setIsDltDialogOpen(true);
                setCurrent(projectId);
              }}
              addColumnHandler={() => console.log("column added")}
            />
          )}
        </StyledPageWrapper>
      </Content>
      <AlertSuccess
        isOpen={isAlertProjectSuccessOpen}
        alertMsg={t("alertProjectCreated")}
      />
      <AlertError
        isOpen={isAlertProjectErrorOpen}
        alertMsg={t("alertProjectError")}
        handleClose={() => {
          setIsAlertProjectErrorOpen(false);
        }}
      />
    </>
  );
};
