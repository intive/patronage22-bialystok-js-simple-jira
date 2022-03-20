import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

import {
  Background,
  CardContent,
  ProjectName,
  StyledCard,
  Wrapper,
} from "./BoardCard.style";

interface BoardCardProps {
  projectName: string;
  boardName: string;
  menuComponent?: React.ReactNode;
  projectId?: string;
  boardId?: string;
}
export const BoardCard = ({
  boardName,
  menuComponent,
  projectName,
  projectId,
  boardId,
}: BoardCardProps) => (
  <StyledCard>
    <Link to={`/projects/${projectName}&${projectId}/${boardName}&${boardId}`}>
      <Background />
    </Link>
    <Wrapper>
      <CardContent>
        <ProjectName component='h3'>{boardName}</ProjectName>
      </CardContent>
      {!!menuComponent && <CardActions>{menuComponent}</CardActions>}
    </Wrapper>
  </StyledCard>
);
