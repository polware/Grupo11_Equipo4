import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

export default function Navbar() {
    return (
        <>
           <Nav>
           <img src="/img/Logo.jpg" alt="" width="200" height="113"/>            
           <Bars />
            <NavMenu>
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink to="/Quienessomos">
                    Quiénes Somos
                </NavLink>
                <NavLink to="/Contactenos">
                    Contáctenos
                </NavLink>
                <NavLink to="/Registrarse">
                    Registrarse
                </NavLink>
                <NavLink to="/Test">
                    Test
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/Actualizar">Login</NavBtnLink>
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>         
    )
}

//export default Nav;