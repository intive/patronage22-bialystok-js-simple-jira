import { styled } from "@mui/system";
import { Card, List } from "@mui/material";

export const StyledTasksCard = styled(Card)(({ theme }) => ({
  maxWidth: "416px",
  height: "67vh",
  borderRadius: theme.shape.borderRadius,
  padding: "16px",
}));

export const TaskList = styled(List)({
  height: "100%",
  overflow: "visible",
});
