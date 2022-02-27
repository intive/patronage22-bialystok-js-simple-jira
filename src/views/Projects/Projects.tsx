import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { StyledProjectList, StyledPageWrapper } from "./Projects.style";
import { mockMenuItems } from "../../mockData/menuItems";
import { mockProjects } from "../../mockData/mockProjects";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { getProjects } from "./getProjects";

export const Projects = () => {
  // const [projects, setProjects] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const data = await getProjects();
      console.log(data);
    })();
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
          {mockProjects.map((project, id) => (
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
