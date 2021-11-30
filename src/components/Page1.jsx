import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Calcular from "./Chaside";

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
                <p/>
                <Button variant="contained" onClick={() => Calcular(1, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(1, 0)}>No</Button>
                <p/>
                <p>2. ¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(2, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(2, 0)}>No</Button>
                <p/>
                <p>3. ¿Te gustaría dirigir un proyecto de urbanización en tu ciudad o municipio?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(3, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(3, 0)}>No</Button>
                <p/>
                <p>4. ¿Ante una frustración siempre contrapones un pensamiento positivo?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(4, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(4, 0)}>No</Button>
                <p/>
                <p>5. ¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(5, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(5, 0)}>No</Button>
                <p/>
                <p>6. ¿Cuando eras pequeñ@, te interesaba saber cómo estaban construidos tus juguetes?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(6, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(6, 0)}>No</Button>
                <p/>
                <p>7. ¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(7, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(7, 0)}>No</Button>
                <p/>
                <p>8. ¿Escuchas atentamente los problemas que te comentan tus amigos?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(8, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(8, 0)}>No</Button>
                <p/>
                <p>9. ¿Eres exigente y crítico con tu equipo de trabajo?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(9, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(9, 0)}>No</Button>
                <p/>
                <p>10. ¿Te atrae armar rompecabezas o puzzles?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(10, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(10, 0)}>No</Button>
                <p/>
                <p>11. ¿Puedes establecer la diferencia conceptual entre macroeconomía y microeconomía?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(11, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(11, 0)}>No</Button>
                <p/>
                <p>12. ¿Usar uniforme te hace sentir distinto, importante?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(12, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(12, 0)}>No</Button>
                <p/>
                <p>13. ¿Participarías como profesional en un espectáculo de acrobacia aérea?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(13, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(13, 0)}>No</Button>
                <p/>
                <p>14. ¿Organizas tu dinero de manera que te alcance hasta el próximo pago?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(14, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(14, 0)}>No</Button>
                <p/>
                <p>15. ¿Convences fácilmente a otras personas sobre la validez de tus argumentos?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(15, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(15, 0)}>No</Button>
                <p/>
                <p>16. ¿Estás informado sobre los nuevos descubrimientos que se están realizando sobre la Teoría del Big-Bang?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(16, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(16, 0)}>No</Button>
                <p/>
                <p>17. ¿Ante una situación de emergencia actuas rápidamente?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(17, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(17, 0)}>No</Button>
                <p/>
                <p>18. ¿Cuando tienes que resolver un problema matemático, perseveras hasta encontrar la solución?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(18, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(18, 0)}>No</Button>
                <p/>
                <p>19. ¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(19, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(19, 0)}>No</Button>
                <p/>
                <p>20. ¿Eres el que pone un toque de alegría en las fiestas?</p>
                <p/>
                <Button variant="contained" onClick={() => Calcular(20, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(20, 0)}>No</Button>
                <p/>
            </ol>
            </Box>
        </>
    )
}

export default Page1
