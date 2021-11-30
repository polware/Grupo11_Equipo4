import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Calcular from "./Chaside";

function Page3() {
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
                <p>41. ¿Participarías de una investigación sobre la violencia en el fútbol?</p>
                <Button variant="contained" onClick={() => Calcular(41, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(41, 0)}>No</Button>
                <p/>
                <p>42. ¿Te gustaría trabajar en un laboratorio mientras estudias?</p>
                <Button variant="contained" onClick={() => Calcular(42, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(42, 0)}>No</Button>
                <p/>
                <p>43. ¿Arriesgarías tu vida para salvar la vida de otro que no conoces?</p>
                <Button variant="contained" onClick={() => Calcular(43, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(43, 0)}>No</Button>
                <p/>
                <p>44. ¿Te agradaría hacer un curso de primeros auxilios?</p>
                <Button variant="contained" onClick={() => Calcular(44, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(44, 0)}>No</Button>
                <p/>
                <p>45. ¿Tolerarías empezar tantas veces como fuese necesario hasta obtener el logro deseado?</p>
                <Button variant="contained" onClick={() => Calcular(45, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(45, 0)}>No</Button>
                <p/>
                <p>46. ¿Distribuyes tu horario del día adecuadamente para poder hacer todo lo planeado?</p>
                <Button variant="contained" onClick={() => Calcular(46, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(46, 0)}>No</Button>
                <p/>
                <p>47. ¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?</p>
                <Button variant="contained" onClick={() => Calcular(47, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(47, 0)}>No</Button>
                <p/>
                <p>48. ¿Elegirías una profesión en la tuvieras que estar algunos meses alejado de tu familia, por ejemplo, el marino?</p>
                <Button variant="contained" onClick={() => Calcular(48, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(48, 0)}>No</Button>
                <p/>
                <p>49. ¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?</p>
                <Button variant="contained" onClick={() => Calcular(49, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(49, 0)}>No</Button>
                <p/>
                <p>50. ¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?</p>
                <Button variant="contained" onClick={() => Calcular(50, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(50, 0)}>No</Button>
                <p/>
                <p>51. ¿Te resulta fácil coordinar un grupo de trabajo?</p>
                <Button variant="contained" onClick={() => Calcular(51, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(51, 0)}>No</Button>
                <p/>
                <p>52. ¿Te resultó interesante el estudio de las ciencias biológicas?</p>
                <Button variant="contained" onClick={() => Calcular(52, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(52, 0)}>No</Button>
                <p/>
                <p>53. ¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?</p>
                <Button variant="contained" onClick={() => Calcular(53, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(53, 0)}>No</Button>
                <p/>
                <p>54. ¿Te incluirías en un proyecto nacional de desarrollo de la principal fuente de recursos de tu ciudad o municipio?</p>
                <Button variant="contained" onClick={() => Calcular(54, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(54, 0)}>No</Button>
                <p/>
                <p>55. ¿Tienes interés por saber cuales son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?</p>
                <Button variant="contained" onClick={() => Calcular(55, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(55, 0)}>No</Button>
                <p/>
                <p>56. ¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?</p>
                <Button variant="contained" onClick={() => Calcular(56, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(56, 0)}>No</Button>
                <p/>
                <p>57. ¿Desearías que te regalen algún instrumento musical para tu cumpleaños?</p>
                <Button variant="contained" onClick={() => Calcular(57, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(57, 0)}>No</Button>
                <p/>
                <p>58. ¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?</p>
                <Button variant="contained" onClick={() => Calcular(58, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(58, 0)}>No</Button>
                <p/>
                <p>59. ¿Crees que tus ideas son importantes, y haces todo lo posible para ponerlas en práctica?</p>
                <Button variant="contained" onClick={() => Calcular(59, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(59, 0)}>No</Button>
                <p/>
                <p>60. ¿Cuando se descompone un aparato en tu casa, te dispones a repararlo pronto?</p>
                <Button variant="contained" onClick={() => Calcular(60, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(60, 0)}>No</Button>
                <p/>
            </ol>
            </Box>
        </div>
    )
}

export default Page3
