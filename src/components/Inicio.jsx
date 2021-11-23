import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios'
import Swal from 'sweetalert2'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Chaside
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const theme = createTheme();

function Inicio() {
  const [identificacion, setIdentificacion] = useState('')
  const [contrasena, setContrasena] = useState('')
  const login = async(e)=>{
      e.preventDefault();
      const usuario={identificacion, contrasena}
      const respuesta= await Axios.post('/estudiante/login', usuario);
      console.log(respuesta);
      const mensaje=respuesta.data.mensaje
      if(mensaje!=='Bienvenido')
      {
          Swal.fire({              
          icon: 'error',
          title: mensaje,
          showConfirmButton: false,
          timer: 1500
          })
      }      
      else {
          const token= respuesta.data.token
          const nombre= respuesta.data.nombre
          const idusuario=respuesta.data.id
          sessionStorage.setItem('token',token)
          sessionStorage.setItem('nombre',nombre)
          sessionStorage.setItem('idusuario',idusuario)
          Swal.fire({              
              icon: 'success',
              title: mensaje + '\n' + sessionStorage.getItem('nombre'),
              showConfirmButton: false,
              timer: 2000
              })
          setTimeout(()=>{
              window.location.href='/Test'
            },1500)
          }      
  }  

    return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/career.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#0d6efd' }}>
              <AssignmentIndIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box component="form" noValidate onSubmit={login} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="identificacion"
                label="N°. Identificación"
                name="identificacion"
                autoFocus
                onChange={(e)=>setIdentificacion(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                onChange={(e)=>setContrasena(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar contraseña"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/Recuperar" variant="body2">
                    ¿Olvidó la contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Registrarse" variant="body2">
                    {"Registrarse"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    );
}

export default Inicio