import ProjectCard from "@components/ProjectCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Grid } from "@mui/material";
import { StyledProjectsList } from "./ProjectsList.style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { ProjectType } from "src/mockData/mockProjects";

interface ProjectsListType {
  projects: ProjectType[];
  dltProjectHandler: any;
  addColumnHandler: any;
}

export const ProjectsList = ({
  projects,
  dltProjectHandler,
  addColumnHandler,
}: ProjectsListType) => {
  return (
    <StyledProjectsList>
      <Grid container spacing={3}>
        {projects
          ?.filter((project: any) => project.isActive)
          .map((project: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <ProjectCard
                menuComponent={
                  <ThreeDotsMenu
                    menuItems={[
                      {
                        id: 0,
                        icon: <ViewWeekOutlinedIcon />,
                        label: "Add column",
                        onClick: () => addColumnHandler(),
                      },
                      {
                        id: 1,
                        icon: <DeleteOutlineIcon />,
                        label: "Delete project",
                        onClick: () => dltProjectHandler(project.id),
                      },
                    ]}
                  />
                }
                name={project.name}
                id={project.id}
              />
            </Grid>
          ))}
      </Grid>
    </StyledProjectsList>
  );
};
