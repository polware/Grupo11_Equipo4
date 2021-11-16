import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
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
    const[estudiantes, setEstudiantes] = useState([])
    const[contactos, setContactos] = useState([])

    useEffect( ()=>{
        listaEstudiantes()
        listarContactos()
    },[] )

    const listaEstudiantes=async()=>{
        //const id = sessionStorage.getItem('idusuario')
        //const token = sessionStorage.getItem('token')
        const respuesta1 = await Axios.get('/estudiante/listar/')
        console.log(respuesta1.data)
        setEstudiantes(respuesta1.data)
    }

    const listarContactos=async()=>{
      const respuesta2 = await Axios.get('/contactos/listar/')
      console.log(respuesta2.data)
      setContactos(respuesta2.data)
    }

    const salir=()=>{
        sessionStorage.clear()
        window.location.href="/"    
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
            <Typography component="h1" variant="h3" color="blue">Perfil Administrador: [{sessionStorage.getItem('nombre')}]</Typography>
            <Button type="submit" variant="contained" startIcon={<LogoutIcon/>} sx={{ mt: 3, mb: 2 }} color="info" onClick={()=>salir()}>Cerrar Sesión</Button>
            </Box>
            <Box sx={{ bgcolor: '#E1E1DF', width: '100%' }}>
            <hr/>
            <Tabs value={value} onChange={handleChange} textColor="primary" centered indicatorColor="primary" variant="fullWidth" aria-label="full width tabs example">
            <Tab label="Tabla Estudiantes" {...a11yProps(0)} />                
            <Tab label="Tabla Contáctenos" {...a11yProps(1)} />
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
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                  </TableContainer>
            </TabPanel>

            <TabPanel value={value} index={1}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="center">Nombre(s) y Apellido(s)</StyledTableCell>
                            <StyledTableCell align="center">Correo Electrónico</StyledTableCell>
                            <StyledTableCell align="center">Institución</StyledTableCell>
                            <StyledTableCell align="center">Mensaje</StyledTableCell>
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
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                  </TableContainer>
            </TabPanel>
        </Box>
        <br/>
        </Container>
        </ThemeProvider>
    )
}

