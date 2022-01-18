import { styled } from '@mui/system';
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/actionCreators/actionCreators';




const StyledButton = styled(Button)`
  margin-top: 50px;
  background-color: red;
  border-radius: 0;

`;



export default function ButtonStyled() {
  const dispatch= useDispatch()


    return <StyledButton onClick={() => dispatch(increment)}>Clik me instead!</StyledButton>;
  }