import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import CssBaseline from '@mui/material/CssBaseline';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Contactenos() {
    const [nombreapellido, setNombreApellido] = useState('')    
    const [correo, setCorreo] = useState('')
    const [institucion, setInstitucion] = useState('')
    const [mensaje, setMensaje] = useState('')

    const guardar = async(e) => {
        e.preventDefault();        
        const contacto = {
            nombreapellido,
            correo,
            institucion,
            mensaje,
        }                
        const respuesta = await Axios.post('/contactos/crear', contacto);
        const aviso = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: aviso,
            showConfirmButton: false,
            timer: 3000
            })
            setTimeout(()=>{
                window.location.href='/'
            },3000)
        };
    
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
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <ContactMailIcon/>
            </Avatar>
            <Typography component="h1" variant="h4" align="center">
                Contáctenos
                <br/>
                <Typography variant="subtitle1" align="center">"Para nosotros es muy importante su opinión y estamos dispuesto a atender sus dudas y sugerencias"</Typography>                
            </Typography>
            <br/>
            <Box component="form" noValidate onSubmit={guardar} sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <TextField required id="nombresapellidos" label="Nombre(s) y Apellido(s)" type="text" fullWidth onChange={e => setNombreApellido(e.target.value)} value={nombreapellido}/>
                    </Grid>

                    <Grid item xs={12}>
                    <TextField  id="Institución" label="Institución" type="text" fullWidth onChange={e => setInstitucion(e.target.value)} value={institucion}/>
                    </Grid>
                                    
                    <Grid item xs={12}>
                    <TextField required id="correo" label="Correo Electrónico" type="email" fullWidth onChange={e => setCorreo(e.target.value)} value={correo}/>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <TextField  id="Mensaje" label="Mensaje" type="text" multiline rows={5} sx={{ width: 500 }} fullWidth onChange={e => setMensaje(e.target.value)} value={mensaje}/>
                    </Grid>
                </Grid>
                <Button type="submit" endIcon={<SendIcon />} fullWidth variant="contained" sx={{ mt: 2, mb: 2 }} >Enviar</Button>
            </Box>
            </Box>
        </Paper>        
        </Container>
        </ThemeProvider>
    );
}