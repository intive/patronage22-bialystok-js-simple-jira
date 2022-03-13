import { useState, useEffect, useCallback } from "react";
import { StyledPageWrapper } from "./Projects.style";
import { useTranslation } from "react-i18next";
import { ConfirmationDialog } from "@modules/ConfirmationDialog/ConfirmationDialog";
import PageHeader from "@modules/PageHeader/PageHeader";
import Content from "@components/Content/Content";
import NewProjectDialog from "@modules/NewProjectDialog/NewProjectDialog";
import { ProjectType } from "src/mockData/mockProjects";
import { ProjectsList } from "@modules/ProjectsList/ProjectsList";
import { Button } from "@components/Button/Button";

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

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isDltDialogOpen, setIsDltDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const { t } = useTranslation();

  const deleteProjectHandler = (id: number) => {
    const newProjectsList = projects.filter(
      (element: any) => element.id !== id
    );
    setProjects(newProjectsList);
  };

  const fetchProjects = useCallback(async () => {
    await importApiModule();
    const projects = await FetchProjectsAPI.getProjects();
    setProjects(projects);
    setIsLoading(false);
  }, [projects]);

  useEffect(() => {
    fetchProjects();
  }, [isCreateDialogOpen]);

  return (
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
        <NewProjectDialog
          isOpen={isCreateDialogOpen}
          setIsOpen={setIsCreateDialogOpen}
          dialogTitle={t("dialogCreateProjectTitle")}
          dialogHelper={t("dialogCreateProjectHelperText")}
        />

        <PageHeader
          pageTitle={t("projectsViewTitle")}
          interactiveElement={
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              {t("newProjectBtn")}
            </Button>
          }
        />
        <ProjectsList
          projects={projects}
          dltProjectHandler={(projectId: any) => {
            setIsDltDialogOpen(true);
            setCurrent(projectId);
          }}
          addColumnHandler={() => console.log("column added")}
        />
      </StyledPageWrapper>
    </Content>
  );
};
