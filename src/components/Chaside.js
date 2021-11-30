import Axios from 'axios'
import Swal from 'sweetalert2'

let counter = 1
export const listaRespuestas = []

const listadointereses = [
    { numpreg: [1,12,20,53,64,71,78,85,91,98], letra: 'C – Administrativas y Contables', resultado: 'Intereses: Organizativo, Supervisión, Orden, Análisis y síntesis, Colaboración, Cálculo'},
    { numpreg: [9,25,34,41,56,67,74,80,89,95], letra: 'H – Humanísticas y Sociales', resultado: 'Intereses: Precisión Verbal, Organización, Relación de Hechos, Lingüística, Orden, justicia'},
    { numpreg: [3,5,11,21,28,36,45,57,81,96], letra: 'A – Artísticas', resultado: 'Intereses: Estético, Armónico, Manual, Visual, Auditivo'},
    { numpreg: [8,16,23,33,44,52,62,70,87,92], letra: 'S – Medicina y Ciencias de la Salud', resultado: 'Intereses: Asistir, Investigativo, Precisión, Senso-Perceptivo, Analítico, Ayudar'},
    { numpreg: [6,19,27,38,47,54,60,75,83,97], letra: 'I – Ingeniería y Computación', resultado: 'Intereses: Cálculo, Científico, Manual, Exacto, Planificar'},
    { numpreg: [5,14,24,31,37,48,58,65,73,84], letra: 'D – Defensa y Seguridad', resultado: 'Intereses: justicia, Equidad, Colaboración, Espíritu de Equipo, Liderazgo'},
    { numpreg: [17,32,35,42,49,61,68,77,88,93], letra: 'E – Ciencias Exactas y Agrarias', resultado: 'Intereses: Investigación, Orden, Organización, Análisis y Síntesis, Numérico, Clasificar'}
    ]

const listadoaptitudes = [
        { numpreg: [2,15,46,51], letra: 'C – Administrativas y Contables', resultado: 'Aptitudes: Persuasivo, Objetivo, Práctico, Tolerante, Responsable, Ambicioso'},
        { numpreg: [30,63,72,86], letra: 'H – Humanísticas y Sociales', resultado: 'Aptitudes: Responsable, justo, Conciliador, Persuasivo, Sagaz, Imaginativo'},
        { numpreg: [22,39,76,82], letra: 'A – Artísticas', resultado: 'Aptitudes: Sensible, Imaginativo, Creativo, Detallista, Innovador, Intuitivo'},
        { numpreg: [4,29,40,69], letra: 'S – Medicina y Ciencias de la Salud', resultado: 'Aptitudes: Altruista, Solidario, Paciente, Comprensivo, Respetuoso, Persuasivo'},
        { numpreg: [10,26,59,90], letra: 'I – Ingeniería y Computación', resultado: 'Aptitudes: Preciso, Práctico, Crítico, Analítico, Rígido'},
        { numpreg: [13,18,43,66], letra: 'D – Defensa y Seguridad', resultado: 'Aptitudes: Arriesgado, Solidario, Valiente, Agresivo, Persuasivo'},
        { numpreg: [7,55,79,94], letra: 'E – Ciencias Exactas y Agrarias', resultado: 'Aptitudes: Metódico, Analítico, Obervador, Introvertido, Paciente, Seguro'}
        ]
/*
const listadeintereses = [
        { numpreg: [1, 3, 5, 7, 9], letra: 'C – Administrativas y Contables.', resultado: 'Intereses: Organizativo, Supervisión, Orden, Análisis y síntesis, Colaboración, Cálculo.'},
        { numpreg: [2, 4, 6, 8, 10], letra: 'H – Humanísticas y Sociales.', resultado: 'Intereses: Precisión Verbal, Organización, Relación de Hechos, Lingüística, Orden, justicia.'}
    ]
*/
export default function Calcular(pregunta, value) {      
    listaRespuestas.push({numpregunta: pregunta, valor: value})
    counter++
    console.log(listaRespuestas);
    console.log(counter)
}

export async function ValidarPreg(){
    var sinResponder = []
    var idintereses = ""
    var intereses = ""
    var idaptitudes = ""
    var aptitudes = ""
    
    // Aquí traigo el número de preguntas respondidas
    const consulta = listaRespuestas.map((item) => item.numpregunta)
          
    // Aquí traigo las preguntas respondadidas afirmativamente. ARREGLO con numpreguntas y valor
    const respafirmativas = listaRespuestas.filter(resp => resp.valor === 1)
    //.map(({numpregunta}) => ({numpregunta}));
    
    //const data = listaRespuestas.map((resp) => resp.valor === 1)    // Este Map me trae True o False si cumple condición
    console.log(respafirmativas)
    for(let i = 0; i < 98; i++) {
    //for(let i = 0; i <= 9; i++) {
        const validar = consulta.includes(i+1)
        if(!validar){
            sinResponder.push(i+1);
        }
    }
    
    const tam = sinResponder.length;
    if(tam > 0){
        Swal.fire({              
            icon: 'error',
            title: 'Por favor responder la(s) pregunta(s): ' +sinResponder,
            showConfirmButton: false,
            timer: 2500
        })
    }
    else {
        const arreglofilt = respafirmativas.map((item) => item.numpregunta)        
        // listadointereses
        for(let k = 0; k < 7; k++) {
            var array1 = listadointereses[k].numpreg
            const compararinter = (array1.every(val => arreglofilt.includes(val)));
            if(compararinter){
                idintereses = listadointereses[k].letra
                intereses = listadointereses[k].resultado
            }
        }        
        // listadoaptitudes
        for(let l = 0; l < 7; l++) {
            var array2 = listadoaptitudes[l].numpreg
            const compararapti = (array2.every(val => arreglofilt.includes(val)));
            if(compararapti){
                idaptitudes = listadoaptitudes[l].letra
                aptitudes = listadoaptitudes[l].resultado
            }
        }
        
        var numberquest = arreglofilt.toString();
        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        const numidentidad = await Axios.get('/estudiante/listarID/'+id,
        {
            headers:{'autorizacion':token}
        })
        console.log(numidentidad.data)
        const aux = (numidentidad.data.identificacion)
        const respuesta = await Axios.get('/resultados/buscarID/'+aux,
        {
            headers:{'autorizacion':token}
        })
        console.log(respuesta.data)              
        const mongoID = (respuesta.data._id)
        const numberID = (respuesta.data.identidad)
        const name = (respuesta.data.nombre)
        const resultados = {
                identidad: numberID,
                nombre: name,
                letraintereses: idintereses,
                letraaptitudes: idaptitudes,
                ramaintereses: intereses,
                ramaaptitudes: aptitudes,
                preguntasafirmativas: numberquest,
        }
        const answer = await Axios.put('/resultados/actualizar/'+mongoID, resultados,{
            headers:{'autorizacion':token}
        })
        console.log(answer)
        Swal.fire({
            icon: 'success',
            title: '¡Sus resultados han sido guardados!',
            showConfirmButton: false,
            timer: 2000
            })
        setTimeout(()=>{
            window.location.href='/Resultados'
        },2500)
    }
}
