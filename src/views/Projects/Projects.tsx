import { useState, useEffect } from "react";
import { StyledProjectList, StyledPageWrapper } from "./Projects.style";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { ConfirmationDialog } from "@modules/ConfirmationDialog/ConfirmationDialog";
import PageHeader from "@modules/PageHeader/PageHeader";
import ProjectCard from "@components/ProjectCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";

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
  const { t } = useTranslation();
  const [projects, setProjects] = useState<any>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const deleteProjectHandler = (id: string) => {
    const newProjectsList = projects.filter(
      (element: any) => element.id !== id
    );
    setProjects(newProjectsList);
  };

  useEffect(() => {
    async function fetchProjects() {
      await importApiModule();
      const projects = await fetch(
        "https://patronageapi.herokuapp.com/api/project"
      )
        .then((res) => res.json())
        .then((data) => data.data);
      setProjects(projects);
    }
    fetchProjects();
  }, []);

  return (
    <StyledPageWrapper>
      <ConfirmationDialog
        confirmHandler={() => {
          deleteProjectHandler(projects[current].id);
          setIsDialogOpen(false);
        }}
        isOpen={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      >
        {t("deleteProjectWarning")}
      </ConfirmationDialog>
      <PageHeader
        pageTitle={t("projectsViewTitle")}
        buttonText={t("newProjectBtn")}
        buttonHandler={() => console.log("works")}
      />
      <StyledProjectList>
        <Grid container spacing={3}>
          {projects?.map((project: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <ProjectCard
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
                name={project.name}
              />
            </Grid>
          ))}
        </Grid>
      </StyledProjectList>
    </StyledPageWrapper>
  );
};
