import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import Link from '@mui/material/Link';
import { NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();
export default function Registrarse() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          correo: data.get('correo'),
          contrasena: data.get('contrasena'),
        });
      };
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">Registrar Cuenta</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField autoComplete="nombre" name="nombres" required fullWidth id="nombres" label="Nombre(s)" autoFocus/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth id="apellidos" label="Apellido(s)" name="apellidos" autoComplete="apellidos"/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="identificacion" label="N° Identificación" name="id" autoComplete="correo"/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="correo" label="Correo Electrónico" name="correo" autoComplete="correo"/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="new-password"/>
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Registrarse</Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <NavLink variant="body2" className="nav-link" to="/">¿Ya tiene una cuenta? Iniciar Sesión</NavLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
            <br/>
          </Container>
        </ThemeProvider>
      );
}
