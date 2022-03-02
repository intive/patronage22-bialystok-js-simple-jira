import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { toProject } from "src/routes";

import {
  Background,
  CardContent,
  ProjectName,
  StyledCard,
  Wrapper,
} from "./styled";
interface ProjectCardProps {
  name: string;
  menuComponent?: React.ReactNode;
}

const ProjectCard = ({ name, menuComponent }: ProjectCardProps) => (
  <StyledCard>
    <Link to={toProject({ projectID: name })}>
      <Background />
    </Link>
    <Wrapper>
      <CardContent>
        <ProjectName component='h3'>{name}</ProjectName>
      </CardContent>
      {!!menuComponent && <CardActions>{menuComponent}</CardActions>}
    </Wrapper>
  </StyledCard>
);

export default ProjectCard;
