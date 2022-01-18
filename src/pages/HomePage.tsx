
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions'; 

import {ImageCounter} from '../components/ImageCounter/ImageCounter'
import {ButtonCounter} from '../components/ButtonCounter/ButtonCounter'


export const HomePage = () => {
    const navigation = useNavigate();

    const handleButtonClick = () => {
        navigation(`/image`);
    }

  return (
      <>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button variant="contained" onClick={handleButtonClick}>Click ME!</Button>
    </CardActions>
    <ImageCounter/>
    <ButtonCounter/>
    </>
  );
};