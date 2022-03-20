import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AssignedTo,
  Assignee,
  StyledTicket,
  StyledTicketContent,
  StyledTicketContentText,
  StyledTicketHeader,
  Title,
  CardContentNoPadding,
} from "./Ticket.style";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { mockMenuItems } from "../../mockData/menuItems";
import { useTranslation } from "react-i18next";

interface TicketProps {
  title: string;
  assignedTo?: string;
  issueId: string;
}

const Ticket = (props: TicketProps) => {
  const [isAssigned, setIsAssigned] = React.useState(
    props.assignedTo ? true : false
  );
  const { t, i18n } = useTranslation();
  const defaultProps = {
    assignedTo: t("unassigned"),
  };
  props = { ...defaultProps, ...props };

  return (
    <StyledTicket>
      <Link
        to={`/projects/:projectName&:projectId/:board/:issue&:${props.issueId}`}
      >
        <CardContentNoPadding>
          <StyledTicketHeader>
            <Title>{props.title}</Title>
          </StyledTicketHeader>
          <StyledTicketContent>
            <StyledTicketContentText>
              {isAssigned && <AssignedTo>{t("assignedTo")}&nbsp;</AssignedTo>}
              <Assignee>{props.assignedTo}</Assignee>
            </StyledTicketContentText>
            <ThreeDotsMenu menuItems={mockMenuItems} />
          </StyledTicketContent>
        </CardContentNoPadding>
      </Link>
    </StyledTicket>
  );
};

export default Ticket;
