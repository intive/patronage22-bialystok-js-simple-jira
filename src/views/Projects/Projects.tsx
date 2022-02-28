import { useState, useEffect } from "react";
import { StyledProjectList, StyledPageWrapper } from "./Projects.style";
import { mockMenuItems } from "../../mockData/menuItems";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import PageHeader from "@components/PageHeader/PageHeader";
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
      <PageHeader
        pageTitle={t("projectsViewTitle")}
        buttonText={t("newProjectBtn")}
        buttonHandler={() => console.log("works")}
      />
      <StyledProjectList>
        <Grid container spacing={3}>
          {projects.map((project: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <ProjectCard
                menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
                name={project.name}
              />
            </Grid>
          ))}
        </Grid>
      </StyledProjectList>
    </StyledPageWrapper>
  );
};
