import { StyledTasksCard, Title } from "./TasksCard.style";
import { Droppable } from "react-beautiful-dnd";
import List from "@mui/material/List";

interface IssuesCardProps {
  title: string;
  children?: React.ReactNode;
  id: string;
}

const TasksCard = ({ title, children, id }: IssuesCardProps) => {
  return (
    <StyledTasksCard>
      <Title variant='capitalHeader' component='h3'>
        {title}
      </Title>
      <Droppable droppableId={`${id}`}>
        {(provided) => (
          <List
            style={{ flex: 1, paddingTop: 16 }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </StyledTasksCard>
  );
};

export default TasksCard;
