import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { StyledProjectList } from "./Projects.style";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { mockMenuItems } from "../../mockData/menuItems";
import { mockProjects } from "../../mockData/mockProjects";

export const Projects = () => {
  return (
    <>
      <PageHeader
        pageTitle='SomePage'
        buttonText='New Project'
        buttonHandler={() => console.log("works")}
      />
      <StyledProjectList>
        {mockProjects.map((project, id) => (
          <ProjectCard
            key={id}
            menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
            name={project.name}
          />
        ))}
      </StyledProjectList>
    </>
  );
};
