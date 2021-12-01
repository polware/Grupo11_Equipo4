import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Login() {
    const [username, setUsername] = useState('')
    const [contrasena, setContrasena] = useState('')
    const Signin = async(e)=>{
        e.preventDefault();
        const usuario={username, contrasena}
        const respuesta= await Axios.post('/administrador/login',usuario);
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
                title: mensaje  + '\n' + sessionStorage.getItem('nombre'),
                showConfirmButton: false,
                timer: 2000
                })
            setTimeout(()=>{
                window.location.href='/Admin'
            },1500)            
        }
}

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
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <AdminPanelSettingsIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Login Administrador
            </Typography>
            <Box component="form" onSubmit={Signin} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nombre de usuario"
                name="username"
                autoFocus
                onChange={(e)=>setUsername(e.target.value)}
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
                label="Recordarme"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Iniciar Sesión
                </Button>                
            </Box>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
        </ThemeProvider>
    )
}

