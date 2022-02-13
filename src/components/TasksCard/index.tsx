import { StyledTasksCard, TaskList, Title } from "./styled";

interface IssuesCardProps {
  title: string;
  children?: React.ReactNode;
}

const TasksCard = ({ title, children }: IssuesCardProps) => {
  return (
    <StyledTasksCard>
      <Title variant='capitalHeader' component='h3'>
        {title}
      </Title>

      <TaskList>{children}</TaskList>
    </StyledTasksCard>
  );
};

export default TasksCard;
