import { useState, useEffect, useCallback } from "react";
import { StyledPageWrapper } from "./Projects.style";
import {
  API_ADD_NEW_PROJECT,
  API_GET_PROJECTS_LIST,
  API_DELETE_A_PROJECT,
} from "../../api/contsans";
import { cleainingSuccessAlerts } from "../../scripts/cleaningSuccessAlerts";
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

let FetchDataAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/projects/mockProjectsApi");
    FetchDataAPI = module.default;
  } else {
    const module = await import("../../api/requestsApi");
    FetchDataAPI = module.default;
  }
}

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDltDialogOpen, setIsDltDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isAlertProjectSuccessOpen, setIsAlertProjectSuccessOpen] =
    useState(false);
  const [isAlertProjectErrorOpen, setIsAlertProjectErrorOpen] = useState(false);

  const { t } = useTranslation();

  const deleteProjectHandler = async (id: number) => {
    await FetchDataAPI.deleteData(`${API_DELETE_A_PROJECT}/${id}`);
    const projectsFromApi = await FetchDataAPI.getData(API_GET_PROJECTS_LIST);
    setProjects(projectsFromApi.data);
  };

  const handleAddNewProject = (inputValue: string) => {
    FetchDataAPI.addData(API_ADD_NEW_PROJECT, {
      alias: inputValue,
      name: inputValue,
      description: "We are not doing that, yet.",
      isActive: true,
    }).then((res: any) => {
      if (res.responseCode) {
        setIsAlertProjectSuccessOpen(true);
        setIsSuccess(!isSuccess);
      } else {
        setIsAlertProjectErrorOpen(true);
      }
    });
  };

  const fetchProjects = useCallback(async () => {
    await importApiModule();
    await FetchDataAPI.getData(API_GET_PROJECTS_LIST).then((res: any) => {
      setProjects(res.data);
      if (res === 0) {
        setIsListEmpty(true);
      } else {
        setIsListEmpty(false);
      }
    });
  }, []);

  useEffect(() => {
    fetchProjects();
    cleainingSuccessAlerts(setIsAlertProjectSuccessOpen);
    setIsLoading(false);
  }, [isSuccess]);

  return (
    <>
      <Content isLoading={isLoading}>
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
          {isListEmpty ? (
            <EmptyListModule
              secondary={+true}
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
        handleClose={() => setIsAlertProjectErrorOpen(false)}
      />
    </>
  );
};
