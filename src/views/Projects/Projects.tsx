import { useState, useEffect, useCallback } from "react";
import { StyledPageWrapper } from "./Projects.style";
import {
  API_ADD_NEW_PROJECT,
  API_GET_PROJECTS_LIST,
  API_DELETE_A_PROJECT,
} from "../../api/contsans";
import { cleainingSuccessAlerts } from "../../scripts/cleaningSuccessAlerts";
import { useTranslation } from "react-i18next";
import { useAlerts } from "../../hooks/useAlerts";
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
  const [useMock, setUseMock] = useState(false);
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
  const [isDeleteProjectError, setIsDeleteProjectError] = useState(false);
  const [isDeleteProjectSuccess, setIsDeleteProjectSuccess] = useState(false);
  const {
    isSuccessAlertActive,
    isErrorAlertActive,
    message,
    openAlert,
    closeErrorAlert,
  } = useAlerts();
  const { t } = useTranslation();

  const deleteProjectHandler = async (id: number) => {
    if (useMock) {
      const newProjectsList = projects.filter(
        (element: any) => element.id !== id
      );
      setProjects(newProjectsList);
    } else {
      const res = await FetchDataAPI.deleteData(
        `${API_DELETE_A_PROJECT}/${id}`
      );

      if (res.status) {
        setIsDeleteProjectSuccess(true);
        setIsSuccess(!isSuccess);
      } else {
        setIsDeleteProjectError(true);
      }
      fetchProjects();
    }
  };

  const dltProjectHandler = async (id: number) => {
    await FetchDataAPI.deleteData(`${API_DELETE_A_PROJECT}/${id}`).then(
      (res: any) => {
        if (res.status) {
          openAlert("success", t("deleteProjectSuccessMsg"));
          setIsSuccess(!isSuccess);
        } else {
          openAlert("error", t("deleteProjectErrorMsg"));
        }
      }
    );
    fetchProjects();
  };

  const handleAddNewProject = (inputValue: string) => {
    FetchDataAPI.addData(API_ADD_NEW_PROJECT, {
      alias: inputValue,
      name: inputValue,
      description: "We are not doing that, yet.",
      isActive: true,
    }).then((res: any) => {
      if (res.responseCode) {
        openAlert("success", t("alertProjectCreated"));
        setIsSuccess(!isSuccess);
      } else {
        openAlert("error", t("alertProjectError"));
      }
    });
  };

  const handleAddNewProject2 = (inputValue: string) => {
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
      if (localStorage["USE_MOCK"] === "true") {
        setUseMock(true);
        setProjects(res.data);
      } else {
        setProjects(res.data);
      }

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
    cleainingSuccessAlerts(setIsDeleteProjectSuccess);
    setIsLoading(false);
  }, [isSuccess]);

  return (
    <>
      <Content isLoading={isLoading}>
        <StyledPageWrapper>
          <ConfirmationDialog
            confirmHandler={() => {
              dltProjectHandler(current);
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
      <AlertSuccess isOpen={isSuccessAlertActive} alertMsg={message} />
      <AlertError
        isOpen={isErrorAlertActive}
        alertMsg={message}
        handleClose={() => closeErrorAlert()}
      />
    </>
  );
};
