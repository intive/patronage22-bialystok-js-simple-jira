import TasksCard from "./index";
import { List } from "@components/List/List";
import { IssueType } from "../../mockData/mockIssue";

export interface TaskCartListType {
  issues: IssueType[];
}

export const TaskCardList = ({ issues }: TaskCartListType) => {
  return (
    <>
      <TasksCard title='todo' key='todo'>
        <List>{issues.filter((issue) => issue.statusId === 0)}</List>
      </TasksCard>
      <TasksCard title='in progress' key='in progress'>
        <List>{issues.filter((issue) => issue.statusId === 1)}</List>
      </TasksCard>
      <TasksCard title='done' key='done'>
        <List>{issues.filter((issue) => issue.statusId === 2)}</List>
      </TasksCard>
    </>
  );
};
