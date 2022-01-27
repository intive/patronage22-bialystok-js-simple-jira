import Typography from "@mui/material/Typography";

import { StyledTasksCard, TaskList } from "./styled";

interface IssuesCardProps {
  title: string;
  children?: React.ReactNode;
}

const TasksCard = ({ title, children }: IssuesCardProps) => {
  return (
    <StyledTasksCard sx={{ boxShadow: 1 }}>
      <Typography
        sx={{ color: "grey.300" }}
        variant='capitalHeader'
        component='h3'
      >
        {title}
      </Typography>

      <TaskList>{children}</TaskList>
    </StyledTasksCard>
  );
};

export default TasksCard;
