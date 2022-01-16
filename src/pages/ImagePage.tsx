
import {useNavigate} from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import ButtonStyled from '../components/Button/Button';
import Grid from '@mui/material/Grid';

import album from '../assets/album.png';



export const ImagePage = () => {
 
  const navigation = useNavigate();

  const handleImageClick = () => {
      navigation(`/`);
  }

  return (
    <Grid  container direction="column"  alignItems="center" justifyContent="center">
    <Card sx={{maxWidth: 340, minWidth: 340}} onClick={handleImageClick} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={album}
          alt="horse"
        />
        </CardActionArea>
    </Card>
    <ButtonStyled />
    </Grid>
    
  );
}