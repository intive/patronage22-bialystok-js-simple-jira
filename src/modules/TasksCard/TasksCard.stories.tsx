import { ComponentStory, ComponentMeta } from "@storybook/react";
import TasksCard from "./index";
import Ticket from "@modules/Ticket/Ticket";

export default {
  title: "TasksCard",
  component: TasksCard,
} as ComponentMeta<typeof TasksCard>;

const Template: ComponentStory<typeof TasksCard> = (args) => (
  <TasksCard {...args}>{args.children}</TasksCard>
);

export const Empty = Template.bind({});
export const WithThreeTickets = Template.bind({});
export const WithEightTickets = Template.bind({});

const TicketList = [
  <Ticket
    issueId='999'
    title={"Unassigned task"}
    key={"task1"}
    handleDeleteTicket={() => console.log("deleted")}
  />,
  <Ticket
    handleDeleteTicket={() => console.log("deleted")}
    issueId='999'
    title={"Example task"}
    assignedTo={"John Doe"}
    key={"task2"}
  />,
  <Ticket
    handleDeleteTicket={() => console.log("deleted")}
    issueId='999'
    title={"Very long title Very long title Very long title Very long title"}
    assignedTo={"Very long name Very long name Very long name Very long name"}
    key={"task3"}
  />,
  <Ticket
    handleDeleteTicket={() => console.log("deleted")}
    issueId='999'
    title={"Task 4"}
    assignedTo={"John Doe"}
    key={"task4"}
  />,
  <Ticket
    handleDeleteTicket={() => console.log("deleted")}
    issueId='999'
    title={"Task 5"}
    assignedTo={"John Doe"}
    key={"task4"}
  />,
  <Ticket
    handleDeleteTicket={() => console.log("deleted")}
    issueId='999'
    title={"Task 6"}
    assignedTo={"John Doe"}
    key={"task4"}
  />,
  <Ticket
    handleDeleteTicket={() => console.log("deleted")}
    issueId='999'
    title={"Task 7"}
    assignedTo={"John Doe"}
    key={"task4"}
  />,
  <Ticket
    handleDeleteTicket={() => console.log("deleted")}
    issueId='999'
    title={"Task 8"}
    assignedTo={"John Doe"}
    key={"task4"}
  />,
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
