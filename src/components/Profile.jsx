import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export default function Profile() {
    const history = useHistory();
    const navigateTo1 = () => history.push('/Actualizar')
    const navigateTo2 = () => history.push('/Eliminar')
    const navigateTo3 = () => history.push('/Test')
    const navigateTo4 = () => history.push('/Resultados')

    return (
        <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Typography component="h1" variant="h3" color="blue">Perfil Estudiante</Typography>
      <br/>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 3 }} color="info" onClick={navigateTo1}>Actualizar Datos</Button>&nbsp;
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 3 }} color="info" onClick={navigateTo2}>Eliminar Perfil</Button>&nbsp;
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 3 }} color="info" onClick={navigateTo3}>Test CHASIDE</Button>&nbsp;
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 3 }} color="info" onClick={navigateTo4}>Resultados Test</Button>&nbsp;
      </Box>
    )
}

