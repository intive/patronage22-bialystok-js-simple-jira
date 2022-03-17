import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { toProject } from "src/views/routes";

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
  id: number;
}

const ProjectCard = ({ name, menuComponent, id }: ProjectCardProps) => (
  <StyledCard>
    <Link to={`/projects/${name}&${id}`}>
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
