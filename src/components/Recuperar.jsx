import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const theme = createTheme();

function Recuperar() {
  const volver=()=>{
    window.location.href="/"    
  }

  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }} >
            <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
              <VpnKeyIcon />
            </Avatar>            
            <Typography component="h1" variant="h5" alignContent="center">
              Recuperar Contraseña
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
            <Typography variant="subtitle1">
            Ingrese por favor su correo electrónico:
            </Typography>
            <br/>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" startIcon={<SearchIcon/>} sx={{ mt: 3, mb: 2, ml: 3 }} color="success">Buscar</Button>&nbsp;
              <Button type="submit" variant="contained" startIcon={<ArrowBackIcon/>} sx={{ mt: 3, mb: 2 }} onClick={()=>volver()}>Volver</Button>
          </Box>    
          </Box>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Container>
      </ThemeProvider>    
  );
}

export default Recuperar