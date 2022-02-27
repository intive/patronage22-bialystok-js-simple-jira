import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { StyledProjectList, StyledPageWrapper } from "./Projects.style";
import { mockMenuItems } from "../../mockData/menuItems";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useProjects } from "./useProjects";
import Content from "../../components/Content/Content";

export const Projects = () => {
  const [isLoading, projects] = useProjects();
  const { t } = useTranslation();

  return (
    <Content isLoading={isLoading} noContentToShow={projects.length === 0}>
      <StyledPageWrapper>
        <PageHeader
          pageTitle={t("projectsViewTitle")}
          buttonText={t("newProjectBtn")}
          buttonHandler={() => console.log("works")}
        />

        <StyledProjectList>
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid key={project.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                <ProjectCard
                  menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
                  name={project.name}
                />
              </Grid>
            ))}
          </Grid>
        </StyledProjectList>
      </StyledPageWrapper>
    </Content>
  );
};
