import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Profile() {
    const [identificacion, setIdentificacion] = useState('')
    const history = useHistory();
    const navigateTo1 = () => history.push('/Actualizar')
    const navigateTo2 = () => history.push('/Eliminar')
    const navigateTo3 = () => history.push('/Test')
    const navigateTo4 = () => history.push('/Resultados')

    useEffect( ()=>{
        obtenerEstudiante()
    },[] )

    const obtenerEstudiante = async()=>{        
        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/estudiante/listarID/'+id,{
          headers:{'autorizacion':token}
        })  
        console.log(respuesta.data)
        setIdentificacion("ID Estudiante: "+respuesta.data.identificacion)
      }

    return (
        <div>
            <br/>            
            <h2>Perfil del Estudiante</h2>
            <hr/>
            <Box sx={{ marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
            <div>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
                    <img src="/img/Profile.png" alt="perfil" width="170" height="170"/>
                    <img src="/img/Update.jpg" alt="actualizar" width="250" height="250"/>
                    <img src="/img/Delete.png" alt="eliminar" width="180" height="180"/>
                    <img src="/img/Test.png" alt="test" width="200" height="200"/>
                    <img src="/img/Results.png" alt="resultado" width="200" height="200"/>
                </Stack>
            </div>
            </Box>
            <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <div>
                <Stack direction="row" marginRight='25px' justifyContent="center" alignItems="left" spacing={10}>
                    <TextField disabled id="filled-basic" label="" variant="filled" value={identificacion} />
                    <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1, mr: 5 }} color="info" onClick={navigateTo1}>Actualizar Datos</Button>
                    <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }} color="info" onClick={navigateTo2}>Eliminar Perfil</Button>
                    <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }} color="info" onClick={navigateTo3}>Test CHASIDE</Button>
                    <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }} color="info" onClick={navigateTo4}>Resultados</Button>
                </Stack>                
            </div>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
