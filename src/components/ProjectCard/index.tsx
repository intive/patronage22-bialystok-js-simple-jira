import CardActions from "@mui/material/CardActions";

import {
  Background,
  CardContent,
  ProjectName,
  StyledCard,
  Wrapper,
} from "./styled";
import { truncateText } from "./truncateText";

interface ProjectCardProps {
  name: string;
  menuComponent?: React.ReactNode;
}

const ProjectCard = ({ name, menuComponent }: ProjectCardProps) => (
  <StyledCard>
    <Background />

    <Wrapper>
      <CardContent>
        <ProjectName component='h3'>{truncateText(name)}</ProjectName>
      </CardContent>

      {!!menuComponent && <CardActions>{menuComponent}</CardActions>}
    </Wrapper>
  </StyledCard>
);

export default ProjectCard;
