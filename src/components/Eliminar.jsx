import React, { useState, useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import Swal from 'sweetalert2'
import { confirmAlert } from 'react-confirm-alert';
import "../confirm-alert.css"

const theme = createTheme();

export default function Eliminar() {
    const history = useHistory();
    const navigateTo = () => history.push('/Profile')

    const [nombres,setNombres]=useState('')
    const [apellidos,setApellidos]=useState('')
    const [identificacion,setIdentificacion]=useState('')
    const [contrasena,setContrasena]=useState('')
    const [correo,setCorreo]=useState('')
    const [fechanac,setFechanac]=useState('')
    const [colegio,setColegio]=useState('')
    const [ciudad,setCiudad]=useState('')
    
    const confirmarborrar = async() => {
        confirmAlert({
          title: 'Por favor confirme:',
          message: '¿Está seguro de borrar su registro?',
          buttons: [
            {
              label: 'Si',
              onClick: () => borrar()
            },
            {
              label: 'No',
              onClick: () => {}
            }
          ],
          closeOnEscape: true,
          afterClose: () => {},
          onClickOutside: () => {},
          onKeypressEscape: () => {},
        });
      };

    useEffect( ()=>{
        listarEstudiante()
    },[] )

    const listarEstudiante=async()=>{
        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/estudiante/listarID/'+id,
        {
          headers:{'autorizacion':token}
        })
        console.log(respuesta.data)
        setNombres(respuesta.data.nombres)
        setApellidos(respuesta.data.apellidos)
        setIdentificacion(respuesta.data.identificacion)
        setContrasena(respuesta.data.contrasena)
        setCorreo(respuesta.data.correo)
        setFechanac(respuesta.data.fechanac)
        setColegio(respuesta.data.colegio)
        setCiudad(respuesta.data.ciudad)
    }

    const borrar= async()=>{
        const id = sessionStorage.getItem('idusuario')
        const token= sessionStorage.getItem('token')
        sessionStorage.clear()
        const respuesta = await Axios.delete('/estudiante/eliminar/'+id,{
                headers:{'autorizacion':token}
            })        
        const mensaje=respuesta.data.mensaje
        //setTimeout(()=>{
        Swal.fire({              
            icon: 'error',
            title: mensaje,
            showConfirmButton: false,
            timer: 3500
            })
        window.location.href='/'
        //},3000)
    }
    
    return (
        <ThemeProvider theme={theme}>        
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <CssBaseline />        
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Box sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
            <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
                <DeleteIcon/>
            </Avatar>
            <Typography component="h1" variant="h4" align="center">
                Eliminar Cuenta Estudiante
            </Typography>
            <br/>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField disabled id="nombres" label="Nombre(s)" type="text" fullWidth value={nombres}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField disabled id="apellidos" label="Apellido(s)" type="text" fullWidth value={apellidos}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField disabled id="identificacion" label="Identificación" fullWidth value={identificacion}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField disabled id="contrasena" label="Contraseña" type="password" fullWidth value={contrasena}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField disabled id="correo" label="Correo Electrónico" type="email" fullWidth value={correo}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField disabled id="ciudad" label="Ciudad" type="text" fullWidth value={ciudad}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField disabled id="fechanac" label="Fecha Nacimiento" type="date" fullWidth value={fechanac}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField disabled id="colegio" label="Colegio" type="text" fullWidth value={colegio}/>
                    </Grid>                
                </Grid>
                <Button variant="contained" startIcon={<DeleteForeverIcon/>} sx={{ mt: 3, mb: 2, ml: 16 }} onClick={()=>confirmarborrar()} color="error">Eliminar</Button>&nbsp;
                <Button type="submit" variant="contained" startIcon={<ArrowBackIcon/>} sx={{ mt: 3, mb: 2 }} onClick={navigateTo}>Volver</Button>
            </Box>
            </Box>
        </Paper>        
        </Container>
        </ThemeProvider>
    );
}
