import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { StyledProjectList } from "./Projects.style";
import { mockMenuItems } from "../../mockData/menuItems";
import { mockProjects } from "../../mockData/mockProjects";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader
        pageTitle={t("projectsViewTitle")}
        buttonText={t("newProjectBtn")}
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
