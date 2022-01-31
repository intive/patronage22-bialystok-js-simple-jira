import Typography from "@mui/material/Typography";
import { StyledTicket, StyledTicketContent } from "./Ticket.style";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";

interface TicketProps {
  title: string;
  assignedTo: string;
}

const Ticket = ({ title, assignedTo }: TicketProps) => {
  return (
    <StyledTicket sx={{ boxShadow: 1 }}>
      <StyledTicketContent>
        <Box sx={{ display: "flex", overflow: "hidden" }}>
          <Typography
            sx={{ color: "grey.700" }}
            component='h4'
            variant='ticketHeader'
            noWrap
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Typography
              sx={{ color: "grey.300" }}
              component='p'
              variant='ticketText'
            >
              Assigned to:&nbsp;
            </Typography>
            <Typography
              sx={{ color: "grey.500" }}
              component='p'
              variant='ticketText'
              noWrap
            >
              {assignedTo}
            </Typography>
          </Box>
          {/* component below - three dot menu if available */}
          <Icon>...</Icon>
        </Box>
      </StyledTicketContent>
    </StyledTicket>
  );
};

export default Ticket;
