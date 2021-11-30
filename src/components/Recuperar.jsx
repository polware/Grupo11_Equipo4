import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal'; 
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const theme = createTheme();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function Recuperar() {
  const [IDestudiante, setIDestudiante] = useState('')
  const [correo, setCorreo] = useState('')
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [identificacion, setIdentificacion] = useState('')
  
  const volver=()=>{
    window.location.href="/"
  }
  
  const [open, setOpen] = React.useState(false); 
  const handleClose = () => {
    setOpen(false);
  };

  const busqueda = async(e)=>{
    e.preventDefault()
    const respuesta = await Axios.get('/estudiante/buscarCorreo/'+correo)
    const mensaje= respuesta.data.mensaje
    if(mensaje !== 'Null') {
      setIDestudiante((respuesta.data._id))
      setNombres(respuesta.data.nombres)
      setApellidos(respuesta.data.apellidos)
      setIdentificacion(respuesta.data.identificacion)
      setOpen(true)
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'El correo ingresado no está registrado',
        showConfirmButton: false,
        timer: 2000
        })
    }   
  }

    const actualizar = async(e)=>{
      e.preventDefault();
      const pass1 = document.getElementById("password1").value      
      const pass2 = document.getElementById("password2").value
      const isEquel = JSON.stringify(pass1) === JSON.stringify(pass2);
      if(isEquel){
          const id = IDestudiante
          var bcrypt = require('bcryptjs');
          var salt = bcrypt.genSaltSync(10);
          const newpassword = bcrypt.hashSync(pass1, salt);
          const student={
            nombres,
            apellidos,
            identificacion,
            contrasena:newpassword,
            correo,
          }
          const respuesta= await Axios.put('/estudiante/passwordUpdate/'+id, student)
          const mensaje=respuesta.data.mensaje
          Swal.fire({
              icon: 'success',
              position: 'top',
              title: mensaje,
              showConfirmButton: false,
              timer: 2500
              })
          setTimeout(()=>{
              window.location.href='/'
          },2500)
          setOpen(false)        
      }
      else {
          document.getElementById('password1').style.backgroundColor = 'yellow';
          document.getElementById('password2').style.backgroundColor = 'yellow';
          Swal.fire({
            icon: 'error',
            position: 'top',
            title: '¡Las contraseñas no coinciden!',
            showConfirmButton: false,
            timer: 2000
            })
      }
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
                    onChange={(e)=>setCorreo(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" startIcon={<SearchIcon/>} sx={{ mt: 3, mb: 2, ml: 3 }} onClick={(e)=>busqueda(e)} color="success">Buscar</Button>&nbsp;
              <Button type="submit" variant="contained" startIcon={<ArrowBackIcon/>} sx={{ mt: 3, mb: 2 }} onClick={()=>volver()}>Volver</Button>
          </Box>

          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
              <Box sx={{ ...style, width: 800, }}>
                  <Avatar sx={{ m: 1, bgcolor: 'warning.main', ml: 42 }}>
                      <VpnKeyIcon/>
                  </Avatar>
                  <Typography id="modal-modal-title" variant="h4" component="h1" align="center" color="blue">
                   Cambiar Contraseña
                   </Typography>
                   <hr/>
                   <Grid container spacing={3}>
                       <Grid item xs={12}>
                       <TextField id="password1" label="Ingrese Nueva Contraseña" type="password" fullWidth />
                       </Grid>
                       <Grid item xs={12}>
                       <TextField required id="password2" label="Repita nueva Contraseña" type="password" fullWidth />
                        </Grid>
                    </Grid>
                    <Button variant="contained" startIcon={<SaveIcon/>} sx={{ mt: 3, mb: 2, ml: 30 }} color="success" onClick={actualizar}>Guardar</Button>&nbsp;
                    <Button variant="contained" startIcon={<CancelPresentationIcon/>} onClick={handleClose} sx={{ mt: 3, mb: 2 }} color="info">Cerrar</Button>
                 </Box>
              </Modal>
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