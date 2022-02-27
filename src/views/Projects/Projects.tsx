import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { StyledProjectList, StyledPageWrapper } from "./Projects.style";
import { mockMenuItems } from "../../mockData/menuItems";
// import { mockProjects } from "../../mockData/mockProjects";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/storeHooks";
import {
  fetchProjects,
  selectProjects,
  selectProjectsStatus,
  Status,
} from "./projectsSlice";

export const Projects = () => {
  const status = useAppSelector(selectProjectsStatus);
  const projects = useAppSelector(selectProjects);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const promise = dispatch(fetchProjects());

    return () => promise.abort();
  }, []);

  switch (status) {
    case Status.LOADING:
      return <div style={{ marginTop: 300 }}>Loading...</div>;

    case Status.SUCCESS:
      return (
        <StyledPageWrapper>
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
                    menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
                    name={project.name}
                  />
                </Grid>
              ))}
            </Grid>
          </StyledProjectList>
        </StyledPageWrapper>
      );

    case Status.ERROR:
      return <div style={{ marginTop: 300 }}>Error!!!</div>;

    default:
      return null;
  }

  // return (
  //   <StyledPageWrapper>
  //     <PageHeader
  //       pageTitle={t("projectsViewTitle")}
  //       buttonText={t("newProjectBtn")}
  //       buttonHandler={() => console.log("works")}
  //     />
  //     <StyledProjectList>
  //       <Grid container spacing={3}>
  //         {mockProjects.map((project, id) => (
  //           <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
  //             <ProjectCard
  //               menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
  //               name={project.name}
  //             />
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </StyledProjectList>
  //   </StyledPageWrapper>
  // );
};
