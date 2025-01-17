import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios'
import Swal from 'sweetalert2'

const theme = createTheme();

export default function Registroadm1n() {
    const [nombre, setNombre] = useState('')
    const [username, setUsername] = useState('')
    const [contrasena,setContrasena] = useState('')

    const guardar = async(e) => {
        e.preventDefault();        
        const admin={
            nombre,
            username,
            contrasena,
        }
        const token = sessionStorage.getItem('token')        
        const respuesta = await Axios.post('/administrador/crear/', admin,
        {
          headers:{'autorizacion':token}
        })
        const mensaje= respuesta.data.mensaje
        if(mensaje === 'yaexiste') {
          Swal.fire({
            icon: 'error',
            title: 'El nombre de usuario ya existe',
            showConfirmButton: false,
            timer: 2000
            })
          document.getElementById('username').value = ""
      }
      else { 
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
            })
            setTimeout(()=>{
                window.location.href='/Admin'
            },1500)
      }
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
            <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h2" variant="h4" color="green">Nueva Cuenta Administrador</Typography>
            <br />
            <Box component="form" noValidate onSubmit={guardar} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField name="nombre" required fullWidth id="nombre" label="Nombre(s) y Apellido(s)" autoFocus onChange={(e)=>setNombre(e.target.value)}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="username" label="Username" name="uername" onChange={(e)=>setUsername(e.target.value)}/>
                  </Grid>                  
                  <Grid item xs={12}>
                    <TextField required fullWidth name="contrasena" label="Contraseña" type="password" id="contrasena" onChange={(e)=>setContrasena(e.target.value)}/>
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="success">Registrar</Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <NavLink variant="body2" className="nav-link" to="/Admin">Regresar a mi perfil Administrador</NavLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>
          </Container>
        </ThemeProvider>
    )
}

