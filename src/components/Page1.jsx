import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Page1() {
    return (
        <>
            <hr/>
            <Box sx={{
                  marginTop: 1,                  
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent:'center',
                }}>
            <ol>
                <p>1. ¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?</p>
                <Button variant="contained">Si</Button>&nbsp;
                <Button variant="contained">No</Button>
                <p/>
                <p>2. ¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?</p>
                <Button variant="contained">Si</Button>&nbsp;
                <Button variant="contained">No</Button>
                <p/>
            </ol>
            </Box>
        </>
    )
}

export default Page1
