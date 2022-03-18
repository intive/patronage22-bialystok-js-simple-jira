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
  id: number;
}

export const BoardCard = ({
  boardName,
  menuComponent,
  projectName,
  id,
}: BoardCardProps) => (
  <StyledCard>
    <Link to={`/projects/${projectName}/${boardName}&${id}`}>
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
