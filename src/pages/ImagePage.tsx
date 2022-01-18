import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import ButtonStyled from '../components/Button/Button';
import Grid from '@mui/material/Grid';

import {ImageCounterContext} from "../context/imageContext"
import click from '../assets/click.png';



export const ImagePage = () => {
 
  const context = useContext(ImageCounterContext);


  const navigation = useNavigate();

  const handleImageClick = () => {
      context?.setCounter(context.counter + 1);
      navigation(`/`);
  }

  return (
    <Grid  container direction="column"  alignItems="center" justifyContent="center">
    <Card sx={{maxWidth: 340, minWidth: 340}} onClick={handleImageClick} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={click}
          alt="horse"
        />
        </CardActionArea>
    </Card>
    <ButtonStyled />
    </Grid>
    
  );
}