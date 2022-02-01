import {
  Background,
  CardContent,
  ProjectName,
  StyledCard,
  StyledCardActions,
  Wrapper,
} from "./styled";

interface ProjectCardProps {
  name: string;
  menuComponent?: React.ReactNode;
}

const ProjectCard = ({ name, menuComponent }: ProjectCardProps) => {
  return (
    <StyledCard>
      <Background />

      <Wrapper>
        <CardContent>
          <ProjectName component='h3'>{name}</ProjectName>
        </CardContent>

        {!!menuComponent && (
          <StyledCardActions>{menuComponent}</StyledCardActions>
        )}
      </Wrapper>
    </StyledCard>
  );
};

export default ProjectCard;
