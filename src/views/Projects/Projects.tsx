import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { StyledProjectList, StyledPageWrapper } from "./Projects.style";
import { mockMenuItems } from "../../mockData/menuItems";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { ConfirmationDialog } from "../../components/ConfirmationDialog/ConfirmationDialog";
import { ProjectTypes } from "../../mockData/mockProjects";

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
  const [projects, setProjects] = useState<ProjectTypes[] | []>([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const deleteProjectHandler = (id: string) => {
    const newProjectsList = projects.filter(
      (element: ProjectTypes) => element.id !== id
    );

    useEffect(() => {
      async function fetchProjects() {
        await importApiModule();
        const projects = await FetchProjectsAPI.getProjects();
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
            {projects.map((project, id) => (
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
};
