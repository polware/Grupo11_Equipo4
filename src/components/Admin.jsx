import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import "../confirm-alert.css"

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#6E6C6C',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: theme.typography.pxToRem(15),
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const theme = createTheme();

export default function Admin() {
    const history = useHistory();
    const ruta = () => history.push('/Registroadm1n')

    const[estudiantes, setEstudiantes] = useState([])
    const[contactos, setContactos] = useState([])
    const[resultados, setResultados] = useState([])

    const [idEstudiante,setIdEstudiante]=useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [correo, setCorreo] = useState('')
    const [fechanac, setFechanac] = useState('')
    const [colegio, setColegio] = useState('')
    const [ciudad, setCiudad] = useState('')

    const [open, setOpen] = React.useState(false);
    //const handleOpen = () => {
    //  setOpen(true);
    //};
    const handleClose = () => {
      setOpen(false);
    };

    useEffect( ()=>{
        listaEstudiantes()
        listarResultados()
        listarContactos()
    },[] )

    const confirmdelest = async(id) => {
      confirmAlert({
        title: 'Por favor confirme:',
        message: '¿Está seguro de borrar el registro?',
        buttons: [
          {
            label: 'Si',
            onClick: () => eliminarest(id)
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

    const confirmdelres = async(id) => {
      confirmAlert({
        title: 'Por favor confirme:',
        message: '¿Está seguro de borrar el registro?',
        buttons: [
          {
            label: 'Si',
            onClick: () => eliminarresult(id)
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

    const confirmdelcont = async(id) => {
      confirmAlert({
        title: 'Por favor confirme:',
        message: '¿Está seguro de borrar el registro?',
        buttons: [
          {
            label: 'Si',
            onClick: () => eliminarcontac(id)
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

    const obtenerEstudiante = async(idParametro)=>{
      setOpen(true)
      const id = idParametro
      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.get('/estudiante/listarIDAdmin/'+id,{
        headers:{'autorizacion':token}
      })  
      console.log(respuesta.data)
      setIdEstudiante(respuesta.data._id)
      setNombres(respuesta.data.nombres)
      setApellidos(respuesta.data.apellidos)
      setIdentificacion(respuesta.data.identificacion)
      setContrasena(respuesta.data.contrasena)
      setCorreo(respuesta.data.correo)
      setFechanac(respuesta.data.fechanac)
      setColegio(respuesta.data.colegio)
      setCiudad(respuesta.data.ciudad)  
    }

    const actualizar = async(e)=>{
      e.preventDefault();
      const id = idEstudiante
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
      listaEstudiantes()
      Swal.fire({              
          icon: 'success',
          title: mensaje,
          showConfirmButton: false,
          timer: 1500
          })
      setOpen(false)
  }

    const listaEstudiantes=async()=>{
        const token = sessionStorage.getItem('token')
        const respuesta1 = await Axios.get('/estudiante/listar/',
        {
          headers:{'autorizacion':token}
        })
        console.log(respuesta1.data)
        setEstudiantes(respuesta1.data)
    }

    const listarResultados=async()=>{
      const token = sessionStorage.getItem('token')
      const respuesta3 = await Axios.get('/resultados/listar/',
      {
        headers:{'autorizacion':token}
      })
      console.log(respuesta3.data)
      setResultados(respuesta3.data)
    }
    
    const listarContactos=async()=>{
      const token = sessionStorage.getItem('token')
      const respuesta2 = await Axios.get('/contactos/listar/',
      {
        headers:{'autorizacion':token}
      })
      console.log(respuesta2.data)
      setContactos(respuesta2.data)
    }

    const eliminarest= async(id)=>{
      const token = sessionStorage.getItem('token')
      const respuesta= await Axios.delete('/estudiante/eliminarAdmin/'+id,{
          headers:{'autorizacion':token}
      })
      const mensaje=respuesta.data.mensaje
      Swal.fire({              
          icon: 'error',
          title: mensaje,
          showConfirmButton: false,
          timer: 2000
          })
          listaEstudiantes()
    }

    const eliminarresult = async(id)=>{
      const token= sessionStorage.getItem('token')
      const respuesta = await Axios.delete('/resultados/eliminar/'+id,{
          headers:{'autorizacion':token}
      })
      const mensaje=respuesta.data.mensaje
      Swal.fire({              
          icon: 'error',
          title: mensaje,
          showConfirmButton: false,
          timer: 2000
          })
          listarResultados()
    }

    const eliminarcontac = async(id)=>{
      const token = sessionStorage.getItem('token')
      const respuesta= await Axios.delete('/contactos/eliminar/'+id,{
          headers:{'autorizacion':token}
      })
      const mensaje=respuesta.data.mensaje
      Swal.fire({              
          icon: 'error',
          title: mensaje,
          showConfirmButton: false,
          timer: 2000
          })
          listarContactos()
    }
    
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <SupervisorAccountIcon/>
            </Avatar>
            <Typography component="h1" variant="h3" color="blue">Perfil Administrador</Typography>
            </Box>
            <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'row', alignItems: 'justify' }}>
            <Typography variant="subtitle1">
            Desde esta página podrá gestionar las 3 tablas almacenadas en MongoDB: la tabla de estudiantes registrados, la tabla de resultados del test Chaside por estudiante, y la tabla del formulario Contáctenos.
            Si desea crear una nueva cuenta de Administrador:             
              <Button variant="contained" startIcon={<AddModeratorIcon/>} onClick={ruta} sx={{ mt: 3, mb: 2, ml: 1 }} color="info">Registrar</Button>
            </Typography>            
            </Box>
            <Box sx={{ bgcolor: '#E1E1DF', width: '100%' }}>
            <hr/>
            <Tabs value={value} onChange={handleChange} centered indicatorColor="primary" textColor="inherit" variant="fullWidth" aria-label="full width tabs example">
            <Tab label="Tabla Estudiantes" {...a11yProps(0)} />                
            <Tab label="Tabla Resultados" {...a11yProps(1)} />
            <Tab label="Tabla Contáctenos" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="center">Nombre(s)</StyledTableCell>
                            <StyledTableCell align="center">Apellido(s)</StyledTableCell>
                            <StyledTableCell align="center">Identificación</StyledTableCell>
                            <StyledTableCell align="center">Contraseña</StyledTableCell>
                            <StyledTableCell align="center">Correo Electrónico</StyledTableCell>
                            <StyledTableCell align="center">Fecha Nacimiento</StyledTableCell>
                            <StyledTableCell align="center">Colegio</StyledTableCell>
                            <StyledTableCell align="center">Ciudad</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {estudiantes.map((estudiante, i) => (
                            <StyledTableRow key={estudiante._id}>
                            <StyledTableCell align="center">{i+1}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.nombres}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.apellidos}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.identificacion}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.contrasena}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.correo}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.fechanac}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.colegio}</StyledTableCell>
                            <StyledTableCell align="center">{estudiante.ciudad}</StyledTableCell>
                            <StyledTableCell align="center">
                              <Button variant="contained" sx={{ mt: 1, mb: 1 }} onClick={()=>obtenerEstudiante(estudiante._id)} color="warning">Editar</Button>
                              <Button variant="contained" sx={{ mt: 1, mb: 1 }} onClick={()=>confirmdelest(estudiante._id)} color="error">Eliminar</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                  </TableContainer>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                  >
                    <Box sx={{ ...style, width: 800, }}>
                    <Avatar sx={{ m: 1, bgcolor: 'warning.main', ml: 42 }}>
                      <AccountCircleIcon/>
                    </Avatar>
                      <Typography id="modal-modal-title" variant="h4" component="h1" align="center" color="orange">
                        Editar Estudiante
                      </Typography>
                      <hr/>
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
                      <Button variant="contained" startIcon={<SaveIcon/>} sx={{ mt: 3, mb: 2, ml: 30 }} color="warning" onClick={actualizar}>Guardar</Button>&nbsp;
                      <Button variant="contained" startIcon={<CancelPresentationIcon/>} onClick={handleClose} sx={{ mt: 3, mb: 2 }} color="info">Cerrar</Button>
                    </Box>
                  </Modal>
            </TabPanel>
            
            <TabPanel value={value} index={1}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="center">Identificación</StyledTableCell>
                            <StyledTableCell align="center">Nombre(s)</StyledTableCell>
                            <StyledTableCell align="center">Letra Intereses</StyledTableCell>
                            <StyledTableCell align="center">Rama Intereses</StyledTableCell>
                            <StyledTableCell align="center">Letra Aptitudes</StyledTableCell>
                            <StyledTableCell align="center">Rama Aptitudes</StyledTableCell>
                            <StyledTableCell align="center">Lista Respuestas</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {resultados.map((resultado, i) => (
                            <StyledTableRow key={resultado._id}>
                            <StyledTableCell align="center">{i+1}</StyledTableCell>
                            <StyledTableCell align="center">{resultado.identidad}</StyledTableCell>
                            <StyledTableCell align="center">{resultado.nombre}</StyledTableCell>
                            <StyledTableCell align="center">{resultado.letraintereses}</StyledTableCell>
                            <StyledTableCell align="center">{resultado.ramaintereses}</StyledTableCell>
                            <StyledTableCell align="center">{resultado.letraaptitudes}</StyledTableCell>
                            <StyledTableCell align="center">{resultado.ramaaptitudes}</StyledTableCell>
                            <StyledTableCell align="center">{resultado.preguntasafirmativas}</StyledTableCell>
                            <StyledTableCell align="center">
                            <Button variant="contained" sx={{ mt: 1, mb: 1 }} onClick={()=>confirmdelres(resultado._id)} color="error">Eliminar</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                  </TableContainer>
            </TabPanel>

            <TabPanel value={value} index={2}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="center">Nombre(s) y Apellido(s)</StyledTableCell>
                            <StyledTableCell align="center">Correo Electrónico</StyledTableCell>
                            <StyledTableCell align="center">Institución</StyledTableCell>
                            <StyledTableCell align="center">Mensaje</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {contactos.map((contacto, i) => (
                            <StyledTableRow key={contacto._id}>
                            <StyledTableCell align="center">{i+1}</StyledTableCell>
                            <StyledTableCell align="center">{contacto.nombreapellido}</StyledTableCell>
                            <StyledTableCell align="center">{contacto.correo}</StyledTableCell>
                            <StyledTableCell align="center">{contacto.institucion}</StyledTableCell>
                            <StyledTableCell align="center">{contacto.mensaje}</StyledTableCell>
                            <StyledTableCell align="center">
                            <Button variant="contained" sx={{ mt: 1, mb: 1 }} onClick={()=>confirmdelcont(contacto._id)} color="error">Eliminar</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                  </TableContainer>
            </TabPanel>
        </Box>
        <br/>
        <br/>
        </Container>
        </ThemeProvider>
    )
}

