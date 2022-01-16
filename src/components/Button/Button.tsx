import { styled } from '@mui/system';
import Button from "@mui/material/Button";


const StyledButton = styled(Button)`
  margin-top: 50px;
  background-color: red;
  border-radius: 0;

`;



export default function ButtonStyled() {
    return <StyledButton>Clik me instead!</StyledButton>;
  }