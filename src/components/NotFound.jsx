import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NotFound() {
    return (        
        <div>
            <br/>
            <hr/>
            <Box
              sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >            
            <img src="/img/Error-404.jpg" alt="" width="833" height="416"/>
            <Typography component="h2" variant="h3" color="red">¡ERROR: Página No Encontrada!</Typography>
            </Box>
            <hr/>
            <br/>
        </div>
    )
}

export default NotFound
