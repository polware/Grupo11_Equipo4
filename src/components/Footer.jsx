import React from 'react'
import { Foot } from './FootElements';

export default function Footer() {
    return ( 
        <>
          <Foot>
          <footer class="footer">
          <div class="container">
            <div class="row justify-content-md-center">            
                <div class="row">
                    <div class="col-md-auto"><br/><img src="/img/Eslogan.jpg" alt="Growing Skills" width="226" height="87"/><br/>
                        <p class="bodytext">&copy; 2021 Derechos Reservados</p></div>
                    <div class="col-md-auto"><br/></div>
                    <div class="col-md-auto"><br/><h5>Integrantes Equipo 4</h5>Paul H. Vargas<br />Jessica D. Páez<br />Andrés Felipe Cruz<br />Breyner Patrón R.<br />Cristian F. Gil C.</div>
                    <div class="col-md-auto"><br/></div>
                    <div class="col-md-auto"><br/><h5>Agradecimientos</h5>Ministerio TIC<br />Universidad Tecnológica de Pereira<br />Grace Fernández<br />Carlos Andrés Díaz</div>
                    <div class="col-md-auto"><br/><a class="navbar-brand" href="https://www.misiontic2022.gov.co/portal/" target="_blank" rel="noreferrer">
                        <img src="/img/Logo-MisionTIC2022.jpg" alt="MisionTIC" width="147" height="88"/></a></div>
                </div>
                <div class="row">
                    <div class="col-md-auto"></div>
                </div>
            </div>
          </div>
          </footer>            
          </Foot>  
        </>
    )
}

