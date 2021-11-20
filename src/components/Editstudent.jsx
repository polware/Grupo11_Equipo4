import React, { useState ,useEffect} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Editstudent(props) {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [correo, setCorreo] = useState('')
    const [fechanac, setFechanac] = useState('')
    const [colegio, setColegio] = useState('')
    const [ciudad, setCiudad] = useState('')

    // Ignorar: React Hook useEffect has a missing dependency
        useEffect(() => {
        (async()=>{
            // eslint-disable-next-line
            const id = props.match.params.id
            const token = sessionStorage.getItem('token')
            const respuesta = await Axios.get('/estudiante/listar/'+id,{
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
        })();
    }, []);

    const actualizar = async(e)=>{
        e.preventDefault();
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const estudiante={
            nombres,
            apellidos,
            identificacion,
            contrasena,
            correo,
            fechanac,
            colegio,
            ciudad
        }
        const respuesta= await Axios.put('/estudiante/actualizarAdmin/'+id,estudiante,{
            headers:{'autorizacion':token}
        })
        const mensaje=respuesta.data.mensaje
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

    return (
        <ThemeProvider theme={theme}>        
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <CssBaseline />        
        <Paper variant="outlined" elevation={8} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Box sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
            <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                <AccountCircleIcon/>
            </Avatar>
            <Typography component="h1" variant="h4" align="center">
                Actualizar Estudiante
            </Typography>
            <br/>
            <Box component="form" noValidate onSubmit={actualizar} sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField required id="nombres" label="Nombre(s)" type="text" fullWidth onChange={e => setNombres(e.target.value)} value={nombres}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField required id="apellidos" label="Apellido(s)" type="text" fullWidth onChange={e => setApellidos(e.target.value)} value={apellidos}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField disabled id="identificacion" label="Identificación" fullWidth onChange={e => setIdentificacion(e.target.value)} value={identificacion}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField disabled id="contrasena" label="Contraseña" type="password" fullWidth onChange={e => setContrasena(e.target.value)} value={contrasena}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField required id="correo" label="Correo Electrónico" type="email" fullWidth onChange={e => setCorreo(e.target.value)} value={correo}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField required id="ciudad" label="Ciudad" type="text" fullWidth onChange={e => setCiudad(e.target.value)} value={ciudad}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField required id="fechanac" label="Fecha Nacimiento" type="date" fullWidth onChange={e => setFechanac(e.target.value)} value={fechanac}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField required id="colegio" label="Colegio" type="text" fullWidth onChange={e => setColegio(e.target.value)} value={colegio}/>
                    </Grid>                
                </Grid>
                <Button type="submit" fullWidth variant="contained" startIcon={<SaveIcon/>} sx={{ mt: 3, mb: 2 }} color="success">Guardar</Button>
            </Box>
            </Box>
        </Paper>
        </Container>
        </ThemeProvider>
    )
}

