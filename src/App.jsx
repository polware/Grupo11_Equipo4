import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registrarse from './components/Registrarse';
import Inicio from './components/Inicio';
import Recuperar from './components/Recuperar';
import Quienessomos from './components/Quienessomos';
import Contactenos from './components/Contactenos';
import Actualizar from './components/Actualizar';
import Test from './components/Test';
import Login from './components/Login';
import Admin from './components/Admin';
import Eliminar from './components/Eliminar';

function App() {
  return (    
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/Recuperar" exact component={Recuperar}/>
          <Route path="/Quienessomos" component={Quienessomos}/>
          <Route path="/Contactenos" component={Contactenos}/>
          <Route path="/Registrarse" component={Registrarse}/>
          <Route path="/Test" component={Test}/>          
          <Route path="/Login" component={Login}/>
          <Route path="/Admin" component={Admin}/>
          <Route path="/Actualizar" component={Actualizar}/>
          <Route path="/Eliminar" component={Eliminar}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
