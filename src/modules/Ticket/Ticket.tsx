import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

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
  index: number;
}

const Ticket = (props: TicketProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isAssigned, setIsAssigned] = React.useState(
    props.assignedTo ? true : false
  );
  const { t } = useTranslation();
  const defaultProps = {
    assignedTo: t("unassigned"),
  };
  props = { ...defaultProps, ...props };

  const handleClickTicket = () => {
    navigate(`${pathname}/${props.title}&${props.issueId}`);
  };

  return (
    <Draggable draggableId={`${props.issueId}`} index={props.index}>
      {(provided) => (
        <StyledTicket
          onClick={handleClickTicket}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
        </StyledTicket>
      )}
    </Draggable>
  );
};

export default Ticket;
