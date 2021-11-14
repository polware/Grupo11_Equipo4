import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Page5() {
    return (
        <div>
            <hr/>
            <Box sx={{
                  marginTop: 1,                  
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent:'center',
                }}>
            <ol >
                <p>5. ¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?</p>
                <Button variant="contained">Si</Button>&nbsp;
                <Button variant="contained">No</Button>
                <p/>
            </ol>
            </Box>
        </div>
    )
}

export default Page5
