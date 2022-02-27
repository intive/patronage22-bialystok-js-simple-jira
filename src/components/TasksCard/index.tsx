import { StyledTasksCard, Title } from "./styled";
import List from "@mui/material/List";

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

      <List>{children}</List>
    </StyledTasksCard>
  );
};

export default TasksCard;
