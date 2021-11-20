import React, { useState ,useEffect} from 'react'
import { AiOutlineHome, AiOutlineTeam, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from './NavbarElements';

export default function Navbar() {
    const [menu, setMenu] = useState(false)
        useEffect(() => {
        if(sessionStorage.getItem('token')){
        setMenu(true)
        } 
    }, [])

    const salir=()=>{
        sessionStorage.clear()
        window.location.href="/"
    }

    return (
        <>
           <Nav>
           <img src="/img/Logo.jpg" alt="" width="200" height="113"/>
           <Bars />
            <NavMenu>
                <NavLink activeClassName='active' to="/" exact={true}><AiOutlineHome />Inicio</NavLink>
                <NavLink activeClassName='active' to="/Quienessomos"><AiOutlineTeam />Quiénes Somos</NavLink>
                <NavLink activeClassName='active' to="/Contactenos"><AiOutlineMail />Contáctenos</NavLink>
                { 
                    menu ?
                    <NavMenu>
                    <NavLink activeClassName="inactive" to="#"><PersonIcon />{sessionStorage.getItem('nombre')}</NavLink>
                    <NavLink activeClassName="inactive" onClick={()=>salir()} to="/"><PersonOffIcon />Salir</NavLink>
                    </NavMenu>
                :
                    <NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/Login"><AiOutlineLock /> Admin</NavBtnLink>
                    </NavBtn>  
                    </NavMenu>
                }
            </NavMenu>
           </Nav> 
        </>
    )
}

