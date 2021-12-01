import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Calcular from "./Chaside";

function Page2() {

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
            <ol>
            <p>21. ¿Eres el que pone un toque de alegría en las fiestas?</p>
                <Button variant="contained" onClick={() => Calcular(21, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(21, 0)}>No</Button>
                <p/>
                <p>22. ¿Crees que los detalles son tan importantes como el todo?</p>
                <Button variant="contained" onClick={() => Calcular(22, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(22, 0)}>No</Button>
                <p/>
                <p>23. ¿Te sentirías a gusto trabajando en un ámbito hospitalario?</p>
                <Button variant="contained" onClick={() => Calcular(23, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(23, 0)}>No</Button>
                <p/>
                <p>24. ¿Te gustaría participar para mantener el orden ante grandes desórdenes y cataclismos?</p>
                <Button variant="contained" onClick={() => Calcular(24, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(24, 0)}>No</Button>
                <p/>
                <p>25. ¿Pasarías varias horas leyendo algún libro de tu interés?</p>
                <Button variant="contained" onClick={() => Calcular(25, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(25, 0)}>No</Button>
                <p/>
                <p>26. ¿Planificas detalladamente tus trabajos antes de empezar?</p>
                <Button variant="contained" onClick={() => Calcular(26, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(26, 0)}>No</Button>
                <p/>
                <p>27. ¿Entablas una relación casi personal con tu computadora?</p>
                <Button variant="contained" onClick={() => Calcular(27, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(27, 0)}>No</Button>
                <p/>
                <p>28. ¿Disfrutas modelando con arcilla?</p>
                <Button variant="contained" onClick={() => Calcular(28, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(28, 0)}>No</Button>
                <p/>
                <p>29. ¿Ayudas habitualmente a los no videntes a cruzar la calle?</p>
                <Button variant="contained" onClick={() => Calcular(29, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(29, 0)}>No</Button>
                <p/>
                <p>30. ¿Consideras importante que desde la escuela primaria se fomente la actitud crítica y la participación activa?</p>
                <Button variant="contained" onClick={() => Calcular(30, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(30, 0)}>No</Button>
                <p/>
                <p>31. ¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?</p>
                <Button variant="contained" onClick={() => Calcular(31, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(31, 0)}>No</Button>
                <p/>
                <p>32. ¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?</p>
                <Button variant="contained" onClick={() => Calcular(32, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(32, 0)}>No</Button>
                <p/>
                <p>33. ¿Participarías en una campaña de prevención contra una enfermedad parasitaria?</p>
                <Button variant="contained" onClick={() => Calcular(33, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(33, 0)}>No</Button>
                <p/>
                <p>34. ¿Te interesan los temas relacionados al pasado y a la evolución del hombre?</p>
                <Button variant="contained" onClick={() => Calcular(34, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(34, 0)}>No</Button>
                <p/>
                <p>35. ¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?</p>
                <Button variant="contained" onClick={() => Calcular(35, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(35, 0)}>No</Button>
                <p/>
                <p>36. ¿Fuera de los horarios escolares, dedicas algún día de la semana a la realización de actividades corporales?</p>
                <Button variant="contained" onClick={() => Calcular(36, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(36, 0)}>No</Button>
                <p/>
                <p>37. ¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de peligro?</p>
                <Button variant="contained" onClick={() => Calcular(37, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(37, 0)}>No</Button>
                <p/>
                <p>38. ¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?</p>
                <Button variant="contained" onClick={() => Calcular(38, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(38, 0)}>No</Button>
                <p/>
                <p>39. ¿Te gusta más el trabajo manual que el trabajo intelectual?</p>
                <Button variant="contained" onClick={() => Calcular(39, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(39, 0)}>No</Button>
                <p/>
                <p>40. ¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?</p>
                <Button variant="contained" onClick={() => Calcular(40, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(40, 0)}>No</Button>
                <p/>
            </ol>
            </Box>
        </div>
    )
}

export default Page2
