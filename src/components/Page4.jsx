import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Calcular from "./Chaside";

function Page4() {
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
                <p>61. ¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?</p>
                <Button variant="contained" onClick={() => Calcular(61, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(61, 0)}>No</Button>
                <p/>
                <p>62. ¿Acostumbras a leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?</p>
                <Button variant="contained" onClick={() => Calcular(62, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(62, 0)}>No</Button>
                <p/>
                <p>63. ¿Preservar las raíces culturales de tu país, te parece importante y necesario?</p>
                <Button variant="contained" onClick={() => Calcular(63, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(63, 0)}>No</Button>
                <p/>
                <p>64. ¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?</p>
                <Button variant="contained" onClick={() => Calcular(64, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(64, 0)}>No</Button>
                <p/>
                <p>65. ¿Te gustaría realizar tareas auxiliares en un barco, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc?</p>
                <Button variant="contained" onClick={() => Calcular(65, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(65, 0)}>No</Button>
                <p/>
                <p>66. ¿Crees que un país debe poseer la más alta tecnología armamentista a cualquier precio?</p>
                <Button variant="contained" onClick={() => Calcular(66, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(66, 0)}>No</Button>
                <p/>
                <p>67. ¿La libertad y la justicia son valores fundamentales en tu vida?</p>
                <Button variant="contained" onClick={() => Calcular(67, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(67, 0)}>No</Button>
                <p/>
                <p>68. ¿Aceptarías hacer una práctica en una industria de productos alimenticios en el sector de control de calidad?</p>
                <Button variant="contained" onClick={() => Calcular(68, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(68, 0)}>No</Button>
                <p/>
                <p>69. ¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?</p>
                <Button variant="contained" onClick={() => Calcular(69, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(69, 0)}>No</Button>
                <p/>
                <p>70. ¿Te interesaría investigar sobre alguna nueva vacuna?</p>
                <Button variant="contained" onClick={() => Calcular(70, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(70, 0)}>No</Button>
                <p/>
                <p>71. ¿En un equipo de trabajo, prefieres el rol de coordinador?</p>
                <Button variant="contained" onClick={() => Calcular(71, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(71, 0)}>No</Button>
                <p/>
                <p>72. ¿En una discusión entre amigos, te ofreces como mediador?</p>
                <Button variant="contained" onClick={() => Calcular(72, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(72, 0)}>No</Button>
                <p/>
                <p>73. ¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?</p>
                <Button variant="contained" onClick={() => Calcular(73, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(73, 0)}>No</Button>
                <p/>
                <p>74. ¿Lucharías por una causa justa hasta las últimas consecuencias?</p>
                <Button variant="contained" onClick={() => Calcular(74, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(74, 0)}>No</Button>
                <p/>
                <p>75. ¿Te gustaría investigar científicamente sobre cultivos agrícolas?</p>
                <Button variant="contained" onClick={() => Calcular(75, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(75, 0)}>No</Button>
                <p/>
                <p>76. ¿Harías un nuevo diseño de una prenda pasada de moda, ante una reunión imprevista?</p>
                <Button variant="contained" onClick={() => Calcular(76, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(76, 0)}>No</Button>
                <p/>
                <p>77. ¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?</p>
                <Button variant="contained" onClick={() => Calcular(77, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(77, 0)}>No</Button>
                <p/>
                <p>78. ¿Dirigirías el área de importación y exportación de una empresa?</p>
                <Button variant="contained" onClick={() => Calcular(78, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(78, 0)}>No</Button>
                <p/>
                <p>79. ¿Te inhibes al entrar a un lugar nuevo con gente desconocida?</p>
                <Button variant="contained" onClick={() => Calcular(79, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(79, 0)}>No</Button>
                <p/>
                <p>80. ¿Te gratificaría el trabajar con niños?</p>
                <Button variant="contained" onClick={() => Calcular(80, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(80, 0)}>No</Button>
                <p/>
            </ol>
            </Box>
        </div>
    )
}

export default Page4
