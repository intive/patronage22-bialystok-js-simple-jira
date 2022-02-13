import { ThemeProvider } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TasksCard from "./index";
import { theme } from "../../theme/mainTheme";
import Ticket from "../Ticket/Ticket";

export default {
  title: "TasksCard",
  component: TasksCard,
} as ComponentMeta<typeof TasksCard>;

const Template: ComponentStory<typeof TasksCard> = (args) => (
  <ThemeProvider theme={theme}>
    <TasksCard {...args}>{args.children}</TasksCard>
  </ThemeProvider>
);

export const Empty = Template.bind({});
export const WithThreeTickets = Template.bind({});
export const WithEightTickets = Template.bind({});

const TicketList = [
  <Ticket title={"Unassigned task"} key={"task1"} />,
  <Ticket title={"Example task"} assignedTo={"John Doe"} key={"task2"} />,
  <Ticket
    title={"Very long title Very long title Very long title Very long title"}
    assignedTo={"Very long name Very long name Very long name Very long name"}
    key={"task3"}
  />,
  <Ticket title={"Task 4"} assignedTo={"John Doe"} key={"task4"} />,
  <Ticket title={"Task 5"} assignedTo={"John Doe"} key={"task4"} />,
  <Ticket title={"Task 6"} assignedTo={"John Doe"} key={"task4"} />,
  <Ticket title={"Task 7"} assignedTo={"John Doe"} key={"task4"} />,
  <Ticket title={"Task 8"} assignedTo={"John Doe"} key={"task4"} />,
];

const ShortTicketList = TicketList.slice(0, 3);

WithEightTickets.args = {
  title: "To do",
  children: TicketList,
};

WithThreeTickets.args = {
  title: "To do",
  children: ShortTicketList,
};

Empty.args = {
  title: "To do",
};
