import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { resolveAny } from 'dns/promises';

import { useSelector, useDispatch } from 'react-redux'


export  const ButtonCounter = () => {

  const count = useSelector(state => state.value);
  

  return (
    <Grid  container direction="row"   justifyContent="space-between" sx={{maxWidth: 340, minWidth: 340}}>
        <h1>{`Button clicked: ${count}`}</h1>
        <Button >Reset</Button>
    </Grid>
    
  );
};